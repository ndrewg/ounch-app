# Database setup
###### This project uses Vercel Postgres for the database. The Vercel Postgres environment is provided in the .env.example file.
###### The database is already created, no need for additional setup.
- Rename `.env.example` -> `.env.development.local`

# How to development server

- Run `pnpm install` or `npm install`
- Run the development server with `pnpm dev`
- Go to [http://localhost:3000/seed](http://localhost:3000/seed) (I have already seeded the database. But for the purpose of testing, I will remove all tables in the database.)
- After seeding, go to [http://localhost:3000/](http://localhost:3000/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
