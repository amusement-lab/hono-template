### Dependencies Version

- `nodejs` >= `24.7.0`
- `pnpm` >= `10.15.0`
- `hono` >= `4.9.5`
- `zod` >= `4.1.5`

### Installation

```
pnpm install
pnpm run dev
```

### Migration Database

This project uses `drizzle-orm` as ORM, and `drizzle-kit` for database migrations.

1. Setup your database and get the connection string (Example: `postgresql://user:password@localhost:5432/mydb`)

2. Create a `.env` file in the root directory (or you can copy, paste, and rename the .env.example into .env) and add your database connection string:

```
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```

3. Run the migration command to create the necessary tables in your database:

a. For genererating migration files based on schema changes:

```
pnpm drizzle-kit generate
```

b. For applying the migrations to the database:

```
pnpm drizzle-kit migrate
```

4. Verify that the tables have been created in your database. You can try running the seed command to populate initial data:

```
pnpm tsx src/db/seed.ts
```

5. Add and edit schema files in the `/src/db/schema.ts` as needed. You also can edit the seed data in `/src/db/seed.ts`.

6. For more commands and options, refer to the Drizzle ORM documentation for PostgreSQL: https://orm.drizzle.team/docs/get-started/postgresql-new

### Docker Compose

This project includes a `docker-compose.yml` file to set up a PostgreSQL database using Docker Compose.
To start the PostgreSQL database, run the following command in the terminal:

```
docker compose up -d
```

Just make sure before running the command, you need to check the env
