export const API_URL = 
  window.location.hostname === "localhost"
    ? "http://localhost:8181"  // Your local backend URL
    : "https://somiahalqura-3000.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai"; // Keep production URL if needed

console.log("API_URL:", API_URL);
