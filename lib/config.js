// Configuration for different environments
export const getBaseURL = () => {
  // Check if we're running on Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Check if we're in production (Vercel sets this automatically)
  if (process.env.NODE_ENV === "production") {
    return "https://blog-project-sigma.vercel.app";
  }

  // Default to localhost for development
  return "http://localhost:3000";
};

// Export the base URL for easy access
export const baseURL = getBaseURL();
