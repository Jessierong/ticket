 // JavaScript Document
$(function() {
	//initial
	fixMenu();
	tabselect()
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
		var winHeight = $(window).height();
		var fixHeight = $(".fix").outerHeight();
		$("#wrapper").height( winHeight - fixHeight );
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
