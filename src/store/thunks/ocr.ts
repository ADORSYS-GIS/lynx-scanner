import { createAsyncThunk } from '@reduxjs/toolkit';
import { extractDataFromText } from '@store/thunks/ner.ts';
import { BarcodeDetector } from 'barcode-detector/pure';
import { createWorker } from 'tesseract.js';

export interface ExtractTextProps {
  imgUri: string;
}

const b64toBlob = async (imgUri: ExtractTextProps['imgUri']) => {
  // Remove the Base64 metadata part
  const base64Data = imgUri.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');

  // Decode Base64 to binary data
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a Blob object with the binary data (and MIME type image/png)
  return new Blob([bytes], { type: 'image/png' });
};

// Extract text from an image
export const extractText = createAsyncThunk<string, ExtractTextProps>(
  'ai/extractText',
  async ({ imgUri }, { dispatch }) => {
    // Create a worker
    const worker = await createWorker(['eng', 'fra', 'deu']);
    // Load the worker
    await worker.load();
    // Recognize the text in the image
    const {
      data: { text },
    } = await worker.recognize(imgUri);
    // Terminate the worker
    await worker.terminate();

    // Dispatch the extracted text
    dispatch(extractDataFromText({ text }));
    return text;
  },
);

export const extractBarcode = createAsyncThunk<string[], ExtractTextProps>(
  'ai/extractBarcode',
  async ({ imgUri }) => {
    try {
      const barcodeDetector = new BarcodeDetector();
      const blob = await b64toBlob(imgUri);
      const barcodes = await barcodeDetector.detect(blob);
      return barcodes.map((barcode) => barcode.rawValue);
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
);
