# 🎭 Playwright Automation 

A personal practice repository to build and refine end-to-end automation skills using [Playwright](https://playwright.dev/). This project includes UI testing, API interactions, cross-browser testing, and integration with CI/CD pipelines using Playwright's built-in reporting.

---

## 🚀 Tech Stack

- [Playwright](https://playwright.dev/) (with TypeScript)
- Node.js
- Playwright Test Runner
- Axios (for API Testing)
- CI/CD Ready (GitHub Actions, Azure DevOps, Jenkins)

---

## 📁 Folder Structure 

```ini
├── .github/                     # GitHub Actions workflows
├── Archive/                     # Archive or backup files
├── node_modules/                # Node.js dependencies
├── playwright-report/           # Playwright HTML report output
├── src/                         # Source code folder
│   ├── config/                  # Configuration files
│   │   └── env/                 # Environment specific configs
│   ├── dao/                     # Data access objects and interfaces
│   ├── data/                    # Static test data
│   ├── fixtures/                # Custom test fixtures
│   ├── pages/                   # Page Object Models (e.g., LoginPage.ts)
│   ├── reports/                 # Custom or manual test reports
│   ├── tests/                   # Test cases
│   ├── types/                   # TypeScript types and interfaces
│   ├── utils/                   # Utility functions
│   └── verifications/           # Custom assertions or verification helpers
├── test-results/                # Playwright test results output
├── .gitignore                   # Files and folders to ignore in Git
├── LICENSE                      # Project license
├── package-lock.json            # Exact versions of dependencies
├── package.json                 # NPM scripts and dependencies
├── playwright.config.ts         # Playwright configuration
├── README.md                    # Project readme
├── tsconfig.json                # TypeScript configuration
```

---

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/playwright-automation-practice.git
cd playwright-automation-practice

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Run Tests

```bash
npx playwright test

```

### 4. View Playwright HTML Report

```bash
npx playwright show-report

```

---

## 🔄 Continuous Integration

This project is compatible with:

- ✅ GitHub Actions
- ✅ Azure DevOps Pipelines
- ✅ Jenkins
- ✅ AWS CodePipeline

Sample CI workflows can be added under `.github/workflows/`.

---

## 🧪 Testing Capabilities

- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel and retry test execution
- Page Object Model structure
- API + UI integration tests
- Custom fixtures and setup scripts
- Test tagging and selective runs

---

## 🌱 Project Goals

- Strengthen Playwright skills via hands-on practice
- Develop a scalable test automation framework
- Integrate with modern DevOps pipelines
- Build readable and maintainable test code

---

## 🙌 Contributions

This is a personal learning project, but feel free to fork it, use it, or suggest improvements via pull requests or issues!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

