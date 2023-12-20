const {db} = require('../db/db');
const express = require("express");
const router = express.Router();

router.get("/getUserInfo",async (req,res)=>{
	const phone = req.query["phone"]
	console.log(typeof phone)
	if(!phone){
		res.json({
			code:400,
			message:"缺少参数,用户手机号必传"
		})
		return
	}
	const sql = `SELECT * FROM user_info WHERE phone = '${phone}'`
	const data = await db.query(sql)
	console.log(data)
	res.json({
		code:200,
		data:{
			dataList:data.rows
		},
		message:"success"
	})
	// db.close()
})

module.exports = router;