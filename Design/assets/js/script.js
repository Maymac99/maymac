var href;
//hide on load
$('.exit_pop').hide();
$('.bulbon').hide();


//goto Page
$("[data-role='footer'], [data-role='header']").hide();
$("#home [data-role='footer'], #home [data-role='header']").show();

$('[href]').click(function(){
	var id = ['#home','#checklist','#map','#enigma', '#findPlace'];
	for (link in id){
		if (this.href.indexOf(id[link]) != -1) {
        $("[data-role='footer'], [data-role='header']").hide();
        $(id[link]+" [data-role='footer'], " + id[link]+ " [data-role='header']").show();
    }
}

});

//toggle hint
$('.bulboff').click(function(){
	$('.hint').show();
	$('.bulbon').show();
	$(this).hide();
})
$(".bulbon").click(function(){
	$('.hint').hide();
	$('.bulboff').show();
	$(this).hide();
});

$('.close_modal').click(function(){
    $('.exit_pop').hide();

});
$('.ask_exit').click(function(e){
	e.preventDefault();
	window.href = $(this).attr('href');
	$('.exit_pop').show();
	var id = $(this).parents(".main").attr("id");
	$("[data-role='footer'], [data-role='header']").hide();
    $("#" + id+" [data-role='footer'], #" + id+ " [data-role='header']").show();
	
});

$('.yes_exit').click(function(e){
	$('.exit_pop').hide();
	location = href;
	$("[data-role='footer'], [data-role='header']").hide();
    $(href+" [data-role='footer'], " + href+ " [data-role='header']").show();
});

// Detect Height
var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
console.log('Address Height:', height);

document.documentElement.style.setProperty('--addressbarHeight',height+'px');


var height2 = $("[data-role='header']").height();
document.documentElement.style.setProperty('--headerHeight',height2+'px');



		