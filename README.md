## About

This is a simple full-stack app with Next.js 13 features, with Postgres db and tailwind for stlying. 
It touches the concepts of server vs client components, initialzing and migrating databases, JWT Authentication, middleware to protect the routes, and handling shimmers.


### Env variables

Set the following ENV variables:
```
DATABASE_URL
COOKIE_NAME
JWT_SECRET
```

Change the Db url to your own db. Here i've used Prisma, for which you can follow these steps:
```
npx prisma db seed
npx prisma migrate dev
```

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
