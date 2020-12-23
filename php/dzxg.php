<?php
header('Content-type: application/json');
//连接数据库
$servername = 'localhost';
$dbname = 'yuhanrui1';
$username = 'yuhanrui1';
$password = 'yuhanrui1';
$name = $_POST['name'];
try {
	$conn = new PDO('mysql:host=localhost;dbname=yuhanrui1',$username,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "UPDATE dianzan SET zan=zan+1 WHERE zanname= ? ";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(1,$name);
    $stmt->execute();
}
catch(PDOException $e) {
	echo $e->getMessage();
}
//关闭数据库
$conn = null;
?>