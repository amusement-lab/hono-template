CREATE TABLE "notes" (
	"id" uuid DEFAULT gen_random_uuid(),
	"title" varchar(255) NOT NULL,
	"status" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" varchar(100) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
