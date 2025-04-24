interface EnvConfig {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: number;
    DATABASE_URL: string;
    JWT_SECRET: string;
    API_KEY?: string;
    LOG_LEVEL?: 'info' | 'warn' | 'error' | 'debug';
    BASE_URL?: string;
  }
  
  declare namespace NodeJS {
    interface ProcessEnv extends Record<keyof EnvConfig, string | undefined> {}
  }