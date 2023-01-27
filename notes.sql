-- Perbedaan fungsi SQL Script dan SQL Console: Kalau yang script bisa disimpan
-- Data Types: CHAR(), VARCHAR(), TEXT(), INTEGER, BOOLEAN, TIME, ARRAY, NUMERIC, DATE, SERIAL, TIMESTAMP, 
-- Column Constraint: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK
-- Conditional: =, >, <, >=, <=, !=
-- Dokumentasi: postgresqltutorial.com
-- CREATE DATABASE
CREATE DATABASE DEMO_POSTGRES;

-- DELETE/DROP DATABASE
DROP DATABASE DEMO_POSTGRES;

-- CHANGE DATABASE NAME
ALTER DATABASE "DEMO_POSTGRES" RENAME TO "demo_postgres";

-- CREATE TABLE ON DATABASE
CREATE TABLE "Instructors" (
    "id" SERIAL PRIMARY KEY,
    -- column_1 dataType(length) column_constraint
    "name" VARCHAR(100) NOT NULL,
    "discordNitro" BOOLEAN NOT NULL DEFAULT FALSE,
    -- The default value of 'discordNitro' will be 'false'
    "gender" CHAR(1) NOT NULL
);

CREATE TABLE "Students" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "bornYear" NOT NULL,
    "gender" CHAR(1) NOT NULL,
    "InstructorId" INTEGER NOT NULL REFERENCES "Instructors" ("id") -- "InstructorId" will be set as Foreign Key and "id" from "Intructors" table will be the primary key
);

-- ADD COLUMN TO EXISTED TABLE
ALTER TABLE
    "Instructors"
ADD
    COLUMN "email" VARCHAR(100) NOT NULL UNIQUE;

-- DELETE EXISTED COLUMN FROM THE TABLE
ALTER TABLE
    "Instructors" DROP COLUMN "email";


-- CRUD --
-- READ ALL DATA ON TABLE 
SELECT
    *
FROM
    "Instructors";

SELECT * FROM "Instructors" WHERE "name" = 'RDS';
SELECT * FROM "Instructors" WHERE "name" = 'RDS' AND "gender" = 'M';
SELECT * FROM "Instructors" WHERE "name" = 'RDS' OR "gender" = 'M';
SELECT * FROM "Instructors" WHERE "name" ILIKE 'bd';

-- INSERT DATA TO TABLE
INSERT INTO
    "Instructors" ("name", "discordNitro", "gender", "email")
VALUES
    ('RDS', true, 'M', 'rds@mail.com');

-- UPDATE DATA FROM TABLE
UPDATE
    "Instructors"
SET
    "discordNitro" = 'false',
    "email" = 'radit@mail.com'
WHERE
    name = 'RDS' RETURNING *;

-- DELETE DATA FROM TABLE
DELETE FROM
    "Instructors" RETURNING *;

-- READ WITH NOT NULL
SELECT * FROM "Instructors" WHERE "name" IS NOT NULL;

-- READ WITH IN
SELECT * FROM "Instructors" WHERE "gender" IN ('M');

-- READ BETWEEN
SELECT * FROM "StudentDetails" WHERE "testScore" BETWEEN 70 AND 80;

-- READ WITH WILDCARD AND LIKE/ILIKE (_,%)
SELECT * FROM "Instructors" WHERE "name" LIKE 'R%' -- Read "name" with first alphabet 'R'
SELECT * FROM "Instructors" WHERE "name" LIKE '_A%' -- Read "name" with second alphabet 'A'
SELECT * FROM "Instructors" WHERE "name" ILIKE 'R%' -- Non sensitive case

-- DATE FUNCTION
SELECT now();
SELECT current_date;
SELECT current_time;
SELECT current_timestamp;

-- ORDER BY (and limit)
SELECT * FROM "Instructors" ORDER BY "name"; -- ASCENDING
SELECT * FROM "Instructors" ORDER BY "name" desc; -- DESCENDING
SELECT * FROM "Instructors" ORDER BY "name" desc LIMIT 3; -- DESCENDING

-- OFFSET
SELECT * FROM "Instructors" LIMIT 5 OFFSET 10; -- Will get the data from id 11 and limited until 5 data



