import { GoogleGenAI } from "@google/genai";
import * as fs from 'fs';

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("No GEMINI_API_KEY in env!");
    return;
  }
  
  const ai = new GoogleGenAI({ apiKey });
  
  // Helper to convert local file to GoogleGenAI.Part
  function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }

  try {
    const lightPart = fileToGenerativePart("/tmp/light.png", "image/png");
    const darkPart = fileToGenerativePart("/tmp/dark.png", "image/png");

    console.log("Analyzing light and dark mode images...");
    const prompt = `You are a professional UX/UI designer and front-end developer.
I have two images from a user:
1. /tmp/light.png: labeled as 'this is the light mode image'
2. /tmp/dark.png: labeled as 'this is the dark mode image'

The user says: 'as per this image for the homepage do this change please'

Please analyze these two screenshots and describe exactly:
1. What sections/components of the homepage are shown in these images?
2. What are the key visual or design differences shown between the light mode and dark mode? Or what specific design change/feature is shown in these screenshots? (e.g., look at layout, colors, elements, text, buttons, grid, etc.)
3. Provide a clear, actionable list of changes that I need to make to the homepage (especially the Hero, Services, or any other section) to match these screenshots exactly. Mention specific titles, texts, background styles, colors, button styles, alignment, etc.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [lightPart, darkPart, prompt],
    });

    console.log("\n=== GEMINI ANALYSIS RESULT ===\n");
    console.log(response.text);
    console.log("\n==============================");
  } catch (err) {
    console.error("Error running Gemini:", err);
  }
}

main();
