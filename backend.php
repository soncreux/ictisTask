<?php
// Подключение к базе данных
$host = "localhost"; // Адрес сервера MySQL
$username = "root"; // Имя пользователя MySQL
$password = ""; // Пароль пользователя MySQL
$database = "db1"; // Имя вашей базы данных

$conn = new mysqli($host, $username, $password, $database);

// Проверка на ошибки подключения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Получение данных из POST-запроса
$data_pick1 = $_POST["data-pick1"];
$data_pick2 = $_POST["data-pick2"];
$name = $_POST["FullName"];
$dob = $_POST["dob"];
$kafedra = $_POST["kafedra"];
$email = $_POST["mail"];
$phone = $_POST['phone'];



// SQL-запрос для вставки данных в таблицу
$sql = "INSERT INTO db1 (name, mail) VALUES ('$name', '$email')";

// Выполнение SQL-запроса
if ($conn->query($sql) === TRUE) {
    echo "Данные успешно сохранены в базе данных.";
} else {
    echo "Ошибка при сохранении данных: " . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>