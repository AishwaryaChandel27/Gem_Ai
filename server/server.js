// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  url: string | undefined;
};

interface GenerateRequest extends NextApiRequest {
  body: {
    prompt: string;
    n: number;
    size: string;
  };
}

// Define your Gemini API endpoint and API key
const GEMINI_API_URL = 'https://api.gemini.com/v1/generate-image';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Update with your actual Gemini API key

export default async function handler(
  req: GenerateRequest,
  res: NextApiResponse<ResponseData>
) {
  const { prompt, n, size } = req.body;

  if (!prompt) {
    return res.status(400).json({ url: undefined });
  }

  try {
    // Call Gemini API
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GEMINI_API_KEY}`, // Add authorization header
      },
      body: JSON.stringify({
        prompt,
        n,
        size,
      }),
    });

    const data = await response.json();

    // Check if response contains image URL
    if (data && data.url) {
      res.status(200).json({ url: data.url });
    } else {
      res.status(500).json({ url: undefined });
    }
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ url: undefined });
  }
}
