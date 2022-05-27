import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'kamemportfolio',
  apiKey: process.env.API_KEY || '',
})