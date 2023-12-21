// Express Server インスタンスを作成
let express = require("express");
let app = express();

// 画像が保存されている imagesフォルダ を指定
app.use("/pic/", express.static("images"));

// 1つ目の関数
app.use("/goaway", (req, res) => {
    res.status(403);
    res.send(`
    <html>
        <body>
            <h1>GO AWAY!</h1>
        </body>
    </html>`)
});

// 2つ目の関数
app.use("/pic/", (req, res) => {
    res.send(`
    <html>
        <head>
            <title>Express Server!</title>
        </head>
        <body>
            <h1>Hi! Waffle</h1>
            <img src="kitty${Math.floor(Math.random() * 5 + 1)}.jpg" width="50%" />
        </body>
    </html>`);
});

// 3つ目の関数
app.use("/", (req, res) => {
    res.send(`
    <html>
        <head>
            <title>Favorites!</title>
        </head>
        <body>
            <h1>Hello World!</h1>
            <h2>Welcome to Express Server</h2>
            <img src="https://i.ibb.co/SN1SDhM/typing-fast-typing.gif">
        </body>
    </html>`);
});

// 4つ目の関数
app.listen(8080, () => {
    console.log("Start Server!");
})
