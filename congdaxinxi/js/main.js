/*solution_banner轮播*/
$(function(){
	var index = 0;
	$(".plant_btn").find("li").click(function(){
		$(this).addClass("plant_btn_on").siblings().removeClass("plant_btn_on");
		var _index = $(this).index();
		index = _index;
		$("#plant_two").find(".solu").eq(_index).fadeIn().siblings().hide();
	});

	/*setInterval(function(){
		index++;
		var length = $("#plant_two").find(".solu").length;
		if(index>=length){
			index = 0;
		}
		$(".plant_btn").find("li").eq(index).addClass("plant_btn_on").siblings().removeClass("plant_btn_on");
		$("#plant_two").find(".solu").eq(index).fadeIn().siblings().hide();
	},3000);*/
});

/*solution_type banner*/
$(function(){
	$(".tech_solu_btn li").mouseover(function(){
		$(this).addClass("tech_solu_btn_on").siblings().removeClass("tech_solu_btn_on");
		var _index = $(this).index();
		$("#tech_solu_img").find(".tech_solu_img_li").eq(_index).show().siblings().hide();
	})
})

$(function(){
	$(".major_solu_btn li").mouseover(function(){
		$(this).addClass("major_solu_btn_on").siblings().removeClass("major_solu_btn_on");
		var _index = $(this).index();
		$("#major_solu_img").find(".major_solu_img_li").eq(_index).show().siblings().hide();
	})
})
/*soft_banner*/
$(function(){
	var index = 0;
	$(".soft_btn li").mouseover(
		function(){
		$(this).addClass("soft_on").siblings().removeClass("soft_on");
		var _index = $(this).index();
		index = _index;
		$("#soft_img").find(" .soft_type").eq(index).fadeIn().siblings().fadeOut();
	});
})

/*index type_banner*/
$(function(){
	var index = 0;
	$("#type_btn li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass();
		var _index = $(this).index();
		$("#type_img li").eq(_index).fadeIn().siblings().fadeOut();
	})
})