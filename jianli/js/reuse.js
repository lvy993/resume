//模块高度
heightGet();

function heightGet() {
	$(".person,.job,.live,.contact").each(function() {
		$(this).css('height', $(window).height())
	})
}
//阻止默认事件
document.onselectstart = new Function("return false");
/*
 * 获取当前时间
 */
function p(s) {
	return s < 10 ? '0' + s : s;
}

// 使用时间
function getTime() {
	let now = new Date()
		// 工作时间
	let start = new Date('2016/06/28 00:00')
	let leftTime = Math.ceil((now.getTime() - start.getTime()) / 1000) // 得出进行的秒数
	let year = Math.floor(leftTime / 60 / 60 / 24 / 365) // 年
	let month = Math.floor(leftTime / 60 / 60 / 24 / 30 % 12) // 月
	let day = Math.floor(leftTime / 60 / 60 / 24 % 365 % 30) // 日
	let minute = Math.floor(leftTime / 60 % 60) // 分
	let seconds = leftTime % 60 // 秒
	let nowTime = '至今已经:' + '<br>' + year + '年' + month + '个月' + day + '天' + '<br>' + minute + '分' + seconds + '秒'
	$(".date").html(nowTime)
		// 生日
	let birthday = new Date('1993/02/03 ')
	let survival = Math.ceil((now.getTime() - birthday.getTime()) / 1000) // 得出进行的秒数
	let Syear = Math.floor(survival / 60 / 60 / 24 / 365) // 年
	let Smonth = Math.floor(survival / 60 / 60 / 24 / 30 % 12) // 月
	let Sday = Math.floor(survival / 60 / 60 / 24 % 365 % 30) // 日
	let birthdayTime = Syear + '年' + Smonth + '个月' + Sday + '天'
	$(".dates").html(birthdayTime)
}
window.onload = function() {
	//定时器每秒调用一次getTime()
	setInterval(function() {
		getTime();
	}, 1000);
}

$(function() {
	var massage = {
		简历评价:"做的比较粗糙,轮播有bug,未适应小屏. 自己给及格分吧",
		name: "卢思源",
		sex: "男",
		age: "24",
		phone:"15538377105",
		email:"lvy993@163.com"
	}
	for(var num in massage) {
		console.log(num+":"+massage[num])
	}
});