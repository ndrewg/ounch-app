import { sql } from '@vercel/postgres';
import { Item } from './definitions';

export const fetchItems = async () => {
  try {
    const data = await sql<Item>`SELECT * FROM items`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
};
