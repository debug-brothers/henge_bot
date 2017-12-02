export const configs = {
  MICROSOFT_APP_ID: process.env.MICROSOFT_APP_ID,
  MICROSOFT_APP_PASSWORD: process.env.MICROSOFT_APP_PASSWORD,
  LUIS_MODEL_URL: process.env.LUIS_MODEL_URL,
  URL: process.env.URL || 'localhost',
  PORT: process.env.PORT || process.env.port || 8000,
}