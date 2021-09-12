CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(350),
	"complete" BOOLEAN not null default 0
	);

INSERT INTO "tasks" ("task", "complete") VALUES 
('clean the litter box', 'false'),
('brush the cat', 'false'),
('go to the gym', 'false');