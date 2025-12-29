
import { GoogleGenAI } from "@google/genai";
import { LessonType } from "./types";

export const getLessonExplanation = async (topic: LessonType) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Explain ${topic} in circle geometry for a middle school student. Use vivid analogies (like wheels, pizza, or orbits). Make it extremely clear. Use emojis. Include a 'Pro-Tip' section at the end.`,
  });
  return response.text;
};

export const chatWithTutor = async (history: any[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are 'Circle-Bot', a master of geometry. You explain circles using simple language and visual descriptions. Always be encouraging and use mathematical constants like Pi accurately.",
    }
  });
  const response = await chat.sendMessage({ message });
  return response.text;
};
