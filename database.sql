CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(350),
	"complete" BOOLEAN not null default false,
	);

INSERT INTO "tasks" ("task") VALUES 
('clean the litter box' ),
('brush the cat'),
('go to the gym');