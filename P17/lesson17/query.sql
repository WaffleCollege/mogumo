--- studentsテーブルを作る
CREATE TABLE students (
   id INTEGER PRIMARY KEY,
   name TEXT,
   admission_year INTEGER,
   faculty TEXT
);

--- studentsにデータを追加する
INSERT INTO students (name, admission_year, faculty) VALUES ('佐藤', 2022, '教育');
INSERT INTO students (name, admission_year, faculty) VALUES ('山田', 2023, '理工');
INSERT INTO students (name, admission_year, faculty) VALUES ('高橋', 2021, '法');
INSERT INTO students (name, admission_year, faculty) VALUES ('小林', 2021, '教育');

--- students のデータを取得する
SELECT * FROM students;
SELECT id, name FROM students WHERE admission_year >= 2022;
SELECT name FROM students WHERE faculty = '教育';

-- studentsのデータを更新する
UPDATE students SET faculty = '文' WHERE id = 4;

-- studentsのデータを削除する
DELETE FROM students WHERE id = 4;
