const express = require("express")
const Ip = require("ip");
const http = require("http");
const router = require("./db/api");

const app = express();

const HOST = Ip.address();
const PORT = 3000
const SERVER = http.createServer(app);

app.use(express.json())
app.use(express.urlencoded({
	extended: false
}));

app.get('/', (req, res) => {
	res.send(`<div style="color:blue;text-align: center">express</div>`)
});

app.all('*', function (req, res, next) {
	// res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	next();
});

app.use('/api',router)
SERVER.listen(PORT, HOST,()=>{
		console.log(`Server is running on ${HOST}:${PORT}`);
});