import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export const getFermentationAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const systemInstruction = `You are 'Han's Assistant', an expert in fermentation and healthy lifestyle for 'Han's Recipe'. 
    Han's Recipe recently shifted from selling traditional cakes and cookies to artisanal fermented products like Kombucha, Kimchi, Sauerkraut, and Water Kefir.
    
    Guidelines:
    1. Keep answers concise, friendly, and in Indonesian.
    2. Focus on health benefits of fermentation.
    3. If asked about buying, tell them to use the WhatsApp button on the website.
    4. Do not provide medical prescriptions, just nutritional advice.
    5. Briefly mention that Han's Recipe products are artisanal and naturally fermented.`;

    const prompt = `${systemInstruction}\n\nUser: ${userPrompt}`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, asisten Han sedang sibuk fermentasi saat ini. Silakan coba lagi nanti!";
  }
};
