function changeColor(color){
	$('.cli-field *,.logo-field *').css('color',color);
}

$("#btn-white").click(function(){
	changeColor('#ffffff');
	$('.logo-field img').attr('src', 'img/logo_w.png');
});

$('#btn-black').click(function(){
	changeColor('#000000');
	$('.logo-field img').attr('src', 'img/logo_b.png');
});

$('#input-background').on('input',function(){
	var num = new Number($('#input-background').val());
	var color = num.toString(16);
	while (color.length<6){
		color = '0'+color;
	}
	color = '#'+color;
	$('body').css('background', color);
	$('#text-background').text('背景色 RGB('+color+')');
});

$('#input-uptext').on('input',function(){
	$('#cli-up').text($('#input-uptext').val());
});
$('#input-bottomtext').on('input',function(){
	$('#cli-bottom').text($('#input-bottomtext').val());
});
$('#input-middletext').on('input',function(){
	var content = $('#input-middletext').val().split('\n');
	var dom = '';
	for (var i=0;i<content.length;i++){
		dom += '<p>'+content[i]+'</p>'
	}
	$('.des-field').html(dom);
});