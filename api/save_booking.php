<?php
header("Content-Type: application/json");
error_reporting(E_ALL);

$host = "localhost";
$user = "root";
$pass = "admin";
$db = "ServiceU";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  echo json_encode(["status"=>"error","message"=>"DB connection failed"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data) {
  echo json_encode(["status"=>"error","message"=>"Invalid JSON"]);
  exit;
}

$required = [
  'repairer_name','category','problem','booking_date','booking_time',
  'customer_name','customer_phone','customer_address',
  'payment_method','estimated_price'
];

foreach ($required as $field) {
  if (!isset($data[$field]) || $data[$field] === '') {
    echo json_encode(["status"=>"error","message"=>"Missing field: $field"]);
    exit;
  }
}

$sql = "INSERT INTO bookings
(repairer_name, category, problem, booking_date, booking_time,
 customer_name, customer_phone, customer_address,
 payment_method, estimated_price)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param(
  "sssssssssd",
  $data['repairer_name'],
  $data['category'],
  $data['problem'],
  $data['booking_date'],
  $data['booking_time'],
  $data['customer_name'],
  $data['customer_phone'],
  $data['customer_address'],
  $data['payment_method'],
  $data['estimated_price']
);

if ($stmt->execute()) {
  echo json_encode(["status"=>"success","booking_id"=>$stmt->insert_id]);
} else {
  echo json_encode(["status"=>"error","message"=>$stmt->error]);
}

$stmt->close();
$conn->close();
