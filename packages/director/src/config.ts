import 'dotenv/config';

export const PORT = process.env.PORT || 1234;

export const DASHBOARD_URL =
  process.env.DASHBOARD_URL || `http://localhost:3333`;

export const EXECUTION_DRIVER =
  process.env.EXECUTION_DRIVER || '../execution/in-memory';

export const SCREENSHOTS_DRIVER =
  process.env.SCREENSHOTS_DRIVER || '../screenshots/dummy.driver';

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017';
export const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'sorry-cypress';
