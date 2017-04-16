$('input').focusin(function(){
	
	$(this).css('border',' 3px solid #10689a' );
	
}
);
$('input').blur(function(){
	$(this).css('border','3px solid white');
});
$('#fb').hover(function(){
	
	$(this).attr('src','images/icon/facebook.png');
	
	$('#twt').animate({opacity:'.002'},100);
	
	
});
$('#fb').mouseleave(function(){
	
	$(this).attr('src','images/icon/white_facebook.png');
	$('#twt').animate({opacity:'1'},100);
});
$('#twt').hover(function(){
	
	$(this).attr('src','images/icon/twitter_bird.png');
	$('#fb').animate({opacity:'.002'},100);
});
$('#twt').mouseleave(function(){
	
	$(this).attr('src','images/icon/white_twitter_bird.png');
	$('#fb').animate({opacity:'1'},100);
});

