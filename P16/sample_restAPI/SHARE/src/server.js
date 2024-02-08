const pokeData = require("./data");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const express = require("express");
  const app = express();

  // pokeDataに格納されている全てのデータを「そのまま」表示するAPI
  app.get("/api/sample", (req, res) => {
    res.send(pokeData);
  });

  // ↓↓↓↓ 宿題のプログラムは、ここより下に書く　http://localhost:3000/api/pokemon?limit=3
  app.get("/api/pokemon", (req, res) => {
    const limit = parseInt(req.query.limit);
    if (limit) {
      return res.json(pokeData.slice(0, limit));
    }
    res.send(pokeData.pokemon);
  });

  app.get("/api/pokemon/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = pokeData.find((poke) => poke.id === id);
    if (pokemon) {
      res.send(pokemon);
    } else {
      res.status(404).send("Not Found");
    }
  });
  // ↑↑↑↑ 宿題のプログラムは、ここより上に書く

  // '/'のルーティングは、その他のAPIのプログラムよりも下に記載
  app.use("/", (req, res) => {
    console.log("Hello, express");

    res.send(`
    <html>
        <body>
            <h1>Let's make Pokemon API</h1>
        </body>
    </html>
    `);
  });

  return app;
};

module.exports = { setupServer };
