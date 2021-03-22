const http = require("http");
const luckyNum = require("./luckynumber")
const port = 3000;


const app = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`<h1>Lucky Number Generator</h1>`);
    res.write(`<h3> Your lucky number is: ${luckyNum()}</h3>`);

    res.end();
});


app.listen(port, () => {
    console.log(`Server up and running ${port}`);
})

