$(document).ready(function (e) {
/*精美车图切换*/	
jQuery(".slideBox1").slide({mainCell:".bd ul",autoPlay:true,effect:"leftLoop",vis:1});	


/*切换标签*/	
$(".menu li").each(function(i){
	$(this).mouseover(function(){
		$(".menu li").removeClass("cur").eq(i).addClass("cur");
		$(".jx").hide().eq(i).show()		
	})
})
	

/*隔行变色*/
$(".jxs tr:even").addClass("jxs_bg")


/*敬请期待*/
$(".results").each(function () {
	var s = $(this).html();
	$(this).hover(function () {
		$(this).html('敬请期待');
	}, function () {
		$(this).html(s);
	});
});


/*hover方式出现浮层*/
$("#txtShow li").hover(function(){
	$(this).find('.txtDiv').show();
},function(){
	$(this).find('.txtDiv').hide();
})

/*经销商列表*/
$(".dealer tr").each(function(){
    $(this).find("td").eq(0).addClass("t_l")
	$(this).find("td").eq(1).addClass("t_l")
	$(this).find("td").eq(2).addClass("t_r")
})

/*注册文本框样式控制*/
$("input[type=text]").addClass("reg_box");
$("select").addClass("reg_box");
var inputbox = $(".reg_box");
$(".register").mouseenter(function(){
	$(this).find(inputbox).eq(0).addClass("reg_onfocus").focus();
})
inputbox.each(function(){
	$(this).bind({
		hover:function(){
			$(this).toggleClass("reg_hover")	
		},
		focus: function() {
			$(this).addClass("reg_onfocus")
		},
		blur: function() {
			$(this).removeClass("reg_onfocus")
		}
	})
});  


/*精美车图*/
var serveTimer = setTimeout(function () {
    var nIn = $(".slider-menu-1 .current").index();
    var len = $(".slider_stage li").length;
    if (nIn < len - 1) {
        nIn++;
    } else {
        nIn = 0;
    }
    $(".slider-menu-1 li").removeClass("current").eq(nIn).addClass("current");
    $(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
    serveTimer = setTimeout(arguments.callee, 5000);
}, 5000);
$(".prev1").click(function () {
    clearTimeout(serveTimer);
    var nIn = $(".slider-menu-1 .current").index();
    var len = $(".slider_stage li").length;
    if (nIn < len && nIn > 0) {
        nIn--;
    } else {
        nIn = len - 1;
    }


    $(".slider-menu-1 li").removeClass("current").eq(nIn).addClass("current");
    $(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
});

$(".next1").click(function () {
    clearTimeout(serveTimer);
    var nIn = $(".slider-menu-1 .current").index();
    var len = $(".slider_stage li").length;
    if (nIn < len - 1) {
        nIn++;
    } else {
        nIn = 0;
    }
    $(".slider-menu-1 li").removeClass("current").eq(nIn).addClass("current");
    $(".slider_stage li").eq(nIn).fadeIn().siblings().hide();
});
$(".slider-menu-1 li").click(function(){
	clearTimeout(serveTimer);
	var nIn=$(this).index();
	$(this).addClass("current").siblings().removeClass("current");
	$(".slider_stage li").eq(nIn).fadeIn().siblings().hide();	
});	

/*弹窗*/
$('.pop_close').click(function () {
	$(this).parent().fadeOut(200)
	$('.mask').fadeOut(200);
})

$('.mask').click(function () {
	$('.pop').fadeOut(200)
	$('.mask').fadeOut(200);
})

$('.pop_login_btn').click(function () {
	$('.pop_login_box').fadeIn(200);
	$('.mask').fadeIn(200);
})

$('.pop_btn_2').click(function () {
	$('.pop_box_2').fadeIn(200);
	$('.mask').fadeIn(200);
})
	


/*浮动菜单*/
$(window).scroll(function(e){
	s = $(document).scrollTop();	
	
	/*回到顶部*/
	if($(window).scrollTop() >= 300){ 
			$('.actGotop').fadeIn(300); 
		}else{    
			$('.actGotop').fadeOut(300); 
	}  
})


$('.actGotop').click(function(){$('html,body').animate({scrollTop: 0}, 500);});
	


})

