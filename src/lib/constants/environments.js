const env = process.env.NODE_ENV;

export const apiURL = (env === "development")
  ? process.env.NEXT_PUBLIC_DEVELOPMENT_API 
  : process.env.NEXT_PUBLIC_API;

export const hostURL = (env === "development")
  ? process.env.NEXT_PUBLIC_DEVELOPMENT_HOST
  : process.env.NEXT_PUBLIC_HOST;
