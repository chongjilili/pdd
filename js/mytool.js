var netconfig  = {
	//	netname:"http://localhost/niushop/"  //本地
	netname: "http://10.30.18.3/pddphp/" // 本地ip
//		netname:"http://182.61.14.205/niushop/"  //服务器
	//	netname:"http://tbhlili101.t-qytsxq.c21.542b.top/"
}

/*
 *
 * 异步获得后台的数据,json格式
 * @param appurl 路径
 * @param urldata 参数对象urldata
 * */
function getAssignDataJson(appurl, urldata) {
	rdata = {};
	$.ajax({

		url: appurl,
		type: "post",
		data: urldata,
		async: false,
		success: function(data) {
			rdata = eval('(' + data + ')');
			//			console.log( rdata );
		}
	});
	return rdata;
}

/*
 * 获得数组某一列的数组，返回新数组
 * @param catlist
 * @param key 键名字
 * @return array
 * */
function getKeyArr(catlist, key) {
	var keyarr = [];
	for(x in catlist) {
		keyarr.push(catlist[x][key]);
	}
	return keyarr;
}

/* 像PHP的 $_GET['arg'] 那样获得地址栏GET参数 */
/* 使用方法 */
/* URL： http://www.baidu.com?user=funsion&age=26 */
/*
 * alert( getArgs()['user'] );  // 输出 funsion
 *alert( getArgs()['age'] );  // 输出 26
 */
function getArgs() {
	var args = {};
	var query = location.search.substring(1); // Get query string
	var pairs = query.split("&");
	// Break at ampersand
	for(var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		// Look for "name=value"
		if(pos == -1) continue; // If not found, skip
		var argname = pairs[i].substring(0, pos); // Extract the name
		var value = pairs[i].substring(pos + 1); // Extract the value
		value = decodeURIComponent(value); // Decode it, if needed
		args[argname] = value; // Store as a property
	}
	return args; // Return the object           
}

/*
 *链接跳转
 * 
 * */
function hrefclick(id) {
	id = (id == "" || typeof(id) == 'undefined' || id == null) ? '#groups' : id;
//	alert(id);
	mui(id).off('tap', 'li');
	mui(id).on('tap', 'li', function(e) {

		e.preventDefault();
		var url = $(this).find('a').attr('href');
//		alert(url);
		/*var self = plus.webview.currentWebview();
		var parent = self.parent();*/

		  
		   mui.openWindow({
			    url: url, 
			     
		   });
		  
		 
//		alert();
		/*var detail = plus.webview.create(url, url);
		detail.show('slide-in-right', 200);*/
//		return false;
	});
}



　