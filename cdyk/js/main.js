/*banner*/
$(function(){
	var index = 0;
	$('.banner_btn').find("li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var _index = $(this).index();
		index = _index;
		$("#banner_pic").find("li").eq(index).fadeIn().siblings().hide();
	})
	setInterval(function(){
		index++;
		var length = $("#banner_pic").find("li").length;
		if(index >= length){
			index=0;
		}
		$(".banner_btn").find("li").eq(index).addClass("on").siblings().removeClass("on");
		$("#banner_pic").find("li").eq(index).fadeIn().siblings().hide();
	},2000)
})

/*index_products*/
$(function(){
	var index = 0;
	$('.show_btn').find("li").mouseover(function(){
		$(this).addClass("pro_on").siblings().removeClass("pro_on");
		var _index = $(this).index();
		index = _index;
		$("#img_all").find(".pro_li_img").eq(index).fadeIn().siblings().hide();
	})
})

/*about*/
$(function(){
	$(".about_btn li").click(function(){
		var index = 0;
		$(this).addClass("about_on").siblings().removeClass("about_on");
		var _index = $(this).index();
		$("#about_img .bg").eq(_index).fadeIn().siblings().fadeOut();
	})
});

/*about_hope*/
$(function(){
	$(".yuanjing").hover(function(){
		$(".yuankong").hide();
		$(".t_yuan").show();
	},function(){
		$(".t_yuan").hide();
		$(".yuankong").show();
	})
	
})

$(function(){
	$(".tuandui").hover(function(){
		$(".yuankong").hide();
		$(".t_tuan").show();
	},function(){
		$(".t_tuan").hide();
		$(".yuankong").show();
	})
	
})

$(function(){
	$(".chuangxin").hover(function(){
		$(".yuankong").hide();
		$(".t_chuang").show();
	},function(){
		$(".t_chuang").hide();
		$(".yuankong").show();
	})
	
})

$(function(){
	$(".zhuanye").hover(function(){
		$(".yuankong").hide();
		$(".t_zhuanye").show();
	},function(){
		$(".t_zhuanye").hide();
		$(".yuankong").show();
	})
	
})

$(function(){
	$(".zhuanzhu").hover(function(){
		$(".yuankong").hide();
		$(".t_zhuanzhu").show();
	},function(){
		$(".t_zhuanzhu").hide();
		$(".yuankong").show();
	})
	
})

/*news*/
$(function(){
	var index = 0;
	$(".t_btn").find("li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var _index = $(this).index();
		index = _index;
		$(".t_left").find("li").eq(_index).fadeIn().siblings().hide();
	});

	setInterval(function(){
		index++;
		var length = $("#b").find("li").length;
		if(index>=length){
			index = 0;
		}
		$(".t_btn").find("li").eq(index).addClass("on").siblings().removeClass("on");
		$(".t_left").find("li").eq(index).fadeIn().siblings().hide();
	},3000)
})

$(function(){
	var index = 0;
	$('.c_tit').find("li").mouseover(function(){
		$(this).addClass("new_on").siblings().removeClass("new_on");
		var _index = $(this).index();
		index = _index;
		$("#news_content").find(".news_neirong").eq(index).fadeIn().siblings().hide();
	})
})

/*eg*/
$(function(){
	$(".eg_btn li").mouseover(function(){
		var index = 0;
		$(this).addClass("eg_on").siblings().removeClass("eg_on");
		var _index = $(this).index();
		$("#anli").find(".anli").eq(_index).fadeIn().siblings().fadeOut();
	})
})
/*Contact*/
/*eg*/
$(function(){
	$(".con_circle li").mouseover(function(){
		var index = 0;
		$(this).addClass("con_on").siblings().removeClass("con_on");
		var _index = $(this).index();
		$("#con").find("li").eq(_index).fadeIn().siblings().fadeOut();
	})
})

$(function(){
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top>200){
			$('#scroll').show();
		}else{
			$('#scroll').hide();
		}
	})
});
/*scroll to top*/
window.onload = function(){
	var scroll = document.getElementById('scroll');
	var erweima_sao = document.getElementById('erweima_sao');
	var erweima = document.getElementById('erweima');
	var toTop = document.getElementById('toTop');
	erweima_sao.style.display='none';
	erweima.onclick = function(){
		if(erweima_sao.style.display=='none'){
			erweima_sao.style.display='block';
		}else erweima_sao.style.display='none';
	}
	erweima.style.cursor = 'pointer';
	toTop.style.cursor = 'pointer';
	toTop.onclick = function(){
		$('html, body').animate({scrollTop: 0}, 300)
	}
}

/*partner banner*/
$(function(){
	var index = 0;
	setInterval(function(){
		index++;
		var length = $("#partner_ul").find(".partner_li").length;
		if(index >= length){
			index=0;
		}
		$("#partner_ul").find(".partner_li").eq(index).fadeIn().siblings().fadeOut();
	},2000)
})