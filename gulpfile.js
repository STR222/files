var gulp = require("gulp");
var webserver = require("gulp-webserver");
var minify = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var path = require("path");
var fs = require("fs");

//合并拷贝css
gulp.task("min",function(){
	gulp.src(["./content/style/style.css","./content/style/style1.css"])
		.pipe(concat("min.css"))
		.pipe(minify())
		.pipe(gulp.dest("./content/style"))
})

//压缩js
gulp.task("minjs",function(){
	gulp.src("./script/date_format.js")
		.pipe(concat("date_format.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./script"))
})

// 启动服务器
gulp.task("server",function(){
	gulp.src(".")
		.pipe(webserver({
			host:"localhost",
			port:8080,
			open:true
		}))
})

// 监听文件、服务器
gulp.task("endserver",function(){
	gulp.src(".")
		.pipe(webserver({
			host:"localhost",
			port:8090,
			middleware:function(req,res,next){
				var pathname = req.url.split("/")[1];
				if(pathname == "index"){
					res.end(fs.readFileSync(path.join(__dirname,"index.html")));
				}
			}
		}))
})