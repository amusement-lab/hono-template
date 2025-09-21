CREATE TABLE "notes" (
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"status" boolean DEFAULT false NOT NULL,
	"amount" integer,
	"price" integer NOT NULL
);
