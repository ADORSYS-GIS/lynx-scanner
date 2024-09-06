import { createAsyncThunk } from '@reduxjs/toolkit';
import nlp from 'compromise';

export interface ExtractDataFromTextProps {
  text: string;
}

// Extract data from the text
export const extractDataFromText = createAsyncThunk<
  Record<string, unknown>,
  ExtractDataFromTextProps
>('ai/extractDataFromText', async ({ text }) => {
  // Extract data from the text
  const doc = nlp(text);
  // Return the extracted data
  return doc.out('json');
});
