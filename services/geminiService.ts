import { GoogleGenAI } from "@google/genai";
import { BlessingTone } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const generateWeddingBlessing = async (
  relationship: string,
  tone: BlessingTone,
  senderName: string
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are a creative wedding assistant. 
      Write a short, heartwarming wedding blessing (max 50 words) for a couple named Aarav and Diya.
      The blessing is from ${senderName}, who is the ${relationship} of the couple.
      The tone should be ${tone}.
      Do not include any preamble, just the blessing text in quotes.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating blessing:", error);
    return "May your life together be filled with love, laughter, and endless happiness. Congratulations!";
  }
};
