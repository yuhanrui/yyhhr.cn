<?php
//连接数据库
$servername = 'localhost';
$dbname = 'yuhanrui1';
$username = 'yuhanrui1';
$password = 'yuhanrui1';
$zh = $_POST['zh'];
$mm = $_POST['mm'];
try {
	$conn = new PDO('mysql:host=localhost;dbname=yuhanrui1',$username,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare('SELECT zh FROM zhmm WHERE ? LIKE zh');
    $stmt->execute(array($zh));
    $result = $stmt->fetchAll();
    if (count($result) > 0) {
     	echo "0";
    }
    else {
     	//开始事务
     	$conn->beginTransaction();
        //SQL语句
     	$conn->exec("INSERT INTO zhmm (zh, mm) VALUES ('$zh', '$mm')");
        //提交事务
     	$conn->commit();
     	echo "1";
     }
}
catch(PDOException $e) {
	echo $e->getMessage();
}
//关闭数据库
$conn = null;
?>