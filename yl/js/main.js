/*service*/
$(function(){
	$('.type_btn li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var _index = $(this).index();
		$('#type_con').find('.ser').eq(_index).slideDown().siblings().slideUp();
	})
});
/*service*/
$(function(){
	$('#aside').find('img').click(function(){
			$('#scroll').show();
	})
		$('#close').click(function(){
			$('#scroll').hide();
	})
})