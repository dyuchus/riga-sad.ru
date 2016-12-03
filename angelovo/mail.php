<?php
	
	// $textMessage = "Имя: ". $_POST['name'] . ", контактный телефон: " . $_POST['phone'];
	$textMessage = "";
    foreach($_POST as $key => $value) {
        $textMessage = $textMessage . "; " . $key . ": " . $value;
    }
	// $arr = json_decode($_POST);
	// $arr = array('from_name' => $_POST['from_name']);

	$arr = array('a' => $textMessage);
	// echo json_encode($_POST);


    // $sendResult = mail("info@riga-sad.ru", "Заявка со страницы аренды коттеджа для детского праздника", $textMessage);
	$sendResult = mail("dyuchus@gmail.com", "Заявка с riga-sad.ru/angelovo", $textMessage);
	$sendResult = mail("info@riga-sad.ru", "Заявка с riga-sad.ru/angelovo", $textMessage);

	echo json_encode($arr);
?>