$(document).ready(function () {
	var PRODUCT="";
	$(".but_t").live("click", function() {
		$(".darker").fadeIn("fast");
		PRODUCT=$(this).parent().find("b, h3").text();
	});
	$(".closer, .closeka").click(function() {$(".darker").fadeOut("fast");});
	
	$(".but, .but2").click(function(){
		PAR = $(this).parent();
		if
		(PAR.find("input[name='name']").val()=="Введите ФИО*")
		{
			alert("пожалуйста, введите Ваше ФИО");
			return;
		}
		
		if (PAR.find("input[name='phone']").val()=="Введите телефон*")
		{
			alert("пожалуйста, введите Ваш телефон");
			return;
		}
		else {
			PAR.find(".but, .but2").html;
			$.post("/mailer.php",{
					site: SITE,
					product: PRODUCT,
					name: PAR.find("input[name='name']").val(),
					phone: PAR.find("input[name='phone']").val(),
					email: PAR.find("input[name='email']").val()
				},function(data){
					alert(data);
					PAR.find(".but, .but2").html;
					yaCounter34665643.reachGoal('zayavka');
			});
		}
	});
	
	var n=0;
	var TAB1=$(".production table").eq(0).find("td");
	TAB1.each(function(){
		n++;
		if(n!=3 && n!=6 && n!=21) $(this).append('<div class="but_t butka">Заказать</div>');
	});
	
	$(".butka").live("click",function(){
		
	});//////ДОПИСАТЬ СКРИПТ НА ДОБАВЛЕНИЕ ТОВАРА
	$("#sertif img").click(function(){
		var html = document.documentElement;
		var body = document.body;
		var scrollTop = html.scrollTop || body && body.scrollTop || 0;
		scrollTop -= html.clientTop;

		var URLKAK=$(this).attr("src");
		$("body").append("<div class='etakartinka' style='top: "+scrollTop+"px;' ><img class='etakartinkai' src='"+URLKAK+"' /></div>");
	});
	$(".etakartinkai").live("click",function(){
		$(this).remove();
	});
});