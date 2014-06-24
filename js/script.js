 // JavaScript Document
$(function() {
	//initial
	fixMenu();
	tabselect()
    //mobile support
 
})
 
/*login*/
function toggleLogin(){
		$("#form-login, #form-reg").toggle();
	}

/*popwin */
function popWin(){
	$("body").append('<div class="shadow"></div>');	
	$('.popwin').show();
}
function closeWin(){
	$(".shadow").remove();
	$('.popwin').hide();
}

function fixMenu(){
	var winWidth = $(window).width();
	if ( winWidth >= 320 ){
		var winHeight = $(window).height();
		var fixHeight = $(".fix").outerHeight();
		$(".scroll").height( winHeight - fixHeight );
	}
}
 
//tab select
function tabselect() {
    $(".menu li").click(function() {
        $(this).addClass("select").siblings().removeClass("select");
        var i = $(this).index();
        $("#detailTab>div").hide().parent().children().eq(i).show();
    }
    );
}
