import { chromium } from 'playwright';

interface HotelPriceInfo {
  hotelName: string;
  priceINR: string;
  source: string;
}

async function getHighestRated5StarHotelPrice(city: string): Promise<HotelPriceInfo | null> {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const today = new Date();
  const checkIn = new Date(today.setDate(today.getDate() + 30));
  const checkOut = new Date(checkIn);
  checkOut.setDate(checkIn.getDate() + 5);

  const formatDate = (date: Date) =>
    `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
      .getDate()
      .toString()
      .padStart(2, '0')}`;

  const checkInStr = formatDate(checkIn);
  const checkOutStr = formatDate(checkOut);

  const url = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
    city
  )}&group_adults=2&group_children=1&age=1&no_rooms=1&checkin_year_month_monthday=${checkInStr}&checkout_year_month_monthday=${checkOutStr}&nflt=class%3D5`;

  await page.goto(url, { waitUntil: 'networkidle' });

  // Dismiss popup if present
  try {
    await page.click('button[aria-label="Dismiss sign-in info."]', { timeout: 3000 });
  } catch {}

  await page.waitForSelector('[data-testid="property-card"]', { timeout: 15000 });

  // Get hotel name, price, and rating
  const hotelInfo = await page.evaluate(() => {
    const hotels = Array.from(document.querySelectorAll('[data-testid="property-card"]'));

    let topHotel: {
      name: string;
      price: string;
      rating: number;
    } | null = null as {
      name: string;
      price: string;
      rating: number;
    } | null;

    hotels.forEach((hotel) => {
      const nameEl = hotel.querySelector('[data-testid="title"]');
      const priceEl = hotel.querySelector('.fcab3ed991.bd73d13072');
      const ratingEl = hotel.querySelector('[data-testid="review-score"] > div > div');

      if (nameEl && priceEl && ratingEl) {
        const name = nameEl.textContent?.trim() || '';
        const price = priceEl.textContent?.trim() || '';
        const rating = parseFloat(ratingEl.textContent || '0');

        if (!topHotel || rating > topHotel.rating) {
          topHotel = { name, price, rating };
        }
      }
    });

    return topHotel
      ? {
          hotelName: topHotel.name,
          priceINR: topHotel.price,
          source: 'https://www.booking.com',
        }
      : null;
  });

  await browser.close();
  return hotelInfo;
}

// Example usage
(async () => {
  const city = 'Goa'; // Replace with your city
  const result = await getHighestRated5StarHotelPrice(city);
  console.log(result);
})();
