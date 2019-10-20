<?php if (isset($_POST['phone'])) {
function send_mail()
	{ $name = htmlspecialchars($_REQUEST['name']); }
	{ $email = "kinder-united@mail.ru"; }
		//$message = '<h2>ЗАЯВКА С САЙТА '.$_REQUEST['site'].'</h2>';
		  $message = '<h2>ЗАЯВКА С САЙТА "киндер-подарок.рф"</h2>';
		if($_POST['product']!="") $message.='<p><b>Заявка на товар:</b> '.$_POST['product'].'</p>';
		$message.='<p><b>Имя: </b>'.$_REQUEST['name'].'</p>
		<p><b>Телефон: </b>'.$_REQUEST['phone'].'</p>
		<p><b>E-mail: </b>'.$_REQUEST['email'].'</p>';
		$reska="Ваша завка отправлена.";
	
	include "class.phpmailer.php";

		$mail = new PHPMailer();
		$mail->From = "киндер-подарок.рф";
		$mail->FromName = $_REQUEST['name'];
		$mail->AddAddress('kinder-united@mail.ru');
		$mail->IsHTML(true);
		$mail->Subject = "E-mail с сайта";

		$mail->Body = $message;
		if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
			{echo '';}
		if (!empty($_POST['phone'])) send_mail();
		echo $reska;
} ?>