<?php
header('Content-type: application/json');
//连接数据库
$servername = 'localhost';
$dbname = 'yuhanrui1';
$username = 'yuhanrui1';
$password = 'yuhanrui1';
try {
	$conn = new PDO('mysql:host=localhost;dbname=yuhanrui1',$username,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare('SELECT * FROM dianzan');
    $stmt->execute();
    $result = $stmt->fetchAll();
    echo json_encode($result);
}
catch(PDOException $e) {
	echo $e->getMessage();
}
//关闭数据库
$conn = null;
?>