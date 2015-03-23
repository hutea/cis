//跳转分页
function topage(page) {
	var form = document.getElementById("pageList");
	form.page.value = page;
	form.submit();
}

//跳转到指定页面
function go(totalPage) {
	var inputPageValue = document.getElementById("inputPage").value;
	if(inputPageValue>totalPage){
		alert("超过最大页数: "+totalPage);
	}else{
		var form = document.getElementById("pageList");
		form.page.value =inputPageValue;
		form.submit();
	}
}
//
function confirmQuery(){
	var form = document.getElementById("pageList");
	form.page.value = 1;
	form.submit();
}



