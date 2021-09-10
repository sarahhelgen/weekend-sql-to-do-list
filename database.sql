CREATE TABLE "tasks"(
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(350),
	"complete" BOOLEAN
	);

INSERT INTO "tasks" ("task", "complete") VALUES 
('clean the litter box', 'false'),
('brush the cat', 'true'),
('go to the gym', 'false');