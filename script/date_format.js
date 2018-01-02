function getdate(){
	var data = new Date();
	var year = data.getFullYear();
	var month = data.getMonth()+1;
	var date = data.getDate();
	document.write(year+"年-"+month+"月-"+date+"日")
}
getdate()