<?php
  
  $firstname = $_POST['first_name'];
  $lastname = $_POST['last_name'];
  $address = $_POST[ 'company'];
  $email = $_POST['email'];
  $phone = $_POST['area_code'];
  


$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "shivanifirst";

$conn = mysqli_connect($host, $dbusername, $dbpassword, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
	
	$sql = "INSERT INTO information(firstname, lastname, address, email, phone)

VALUES('$firstname', '$lastname', '$address' ,'$email', '$phone')";

if ($conn->query($sql) === TRUE) {
  header("Location:/Front-end/AfterLog.html");
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>