// index.ts

import { groq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const { text } = await generateText({
  model: groq('llama-3.1-8b-instant'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});
