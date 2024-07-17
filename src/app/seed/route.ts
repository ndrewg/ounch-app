import { db } from '@vercel/postgres';
import { items } from '@/app/lib/mockdata';

const client = await db.connect();

const seedItems = async () => {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS items (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      description TEXT
    );
  `;

  const insertedItems = await Promise.all([
    items.map((item) => {
      return client.sql`
        INSERT INTO items (name, description)
        VALUES (${item.name}, ${item.description})
      `;
    }),
  ]);

  return insertedItems;
};

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedItems();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;

    return Response.json({ error }, { status: 500 });
  }
}
