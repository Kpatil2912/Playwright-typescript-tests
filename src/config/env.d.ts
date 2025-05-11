declare namespace NodeJS {
  interface ProcessEnv {
    BASE_URL: string;
    API_BASE_URL: string;
    USERNAME: string;
    PASSWORD: string;
    ENV: 'development' | 'staging' | 'production';
  }
}
