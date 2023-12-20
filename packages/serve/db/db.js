const dotenv = require("dotenv")
const pg = require("pg")
dotenv.config()
const pool = new pg.Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT
})
pool.connect((err)=>{
	if(err){
		return console.error('could not connect to db', err)
	}
	return console.log('连接成功')
})
exports.db = pool;