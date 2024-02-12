const sqlite = require("sqlite3");

const db = new sqlite.Database("waffle.db");

// Node.jsでSQLiteを扱う簡単なサンプルコードです
// ドキュメント: https://github.com/TryGhost/node-sqlite3/wiki/API

// SQLを順番に実行する
db.serialize(() => {
  // all: 全ての結果を一度に取得する
  db.all("SELECT * FROM students;", (err, rows) => {
    console.log(rows);
  });

  // get: 1件だけ取得する
  db.get("SELECT * FROM students WHERE id = 1;", (err, row) => {
    console.log(row);
  });

  // 発展 $idというプレースホルダーを使ってSQLを実行する
  db.get("SELECT * FROM students WHERE id = $id;", { $id: 2 }, (err, row) => {
    console.log("placeholder: ", row);
  });

  // 発展 プリペアドステートメントを使ってより安全にSQLを実行する
  const statement = db.prepare("SELECT * FROM students WHERE id = $id;");
  statement.get({ $id: 3 }, (err, row) => {
    console.log("prepared statement: ", row);
  });
  statement.finalize();
});

db.close();
