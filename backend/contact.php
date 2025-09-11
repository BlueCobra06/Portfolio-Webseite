<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Nur POST-Requests erlaubt']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige JSON-Daten']);
    exit;
}

$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$message = trim($input['message'] ?? '');

$errors = [];

if (empty($name)) {
    $errors[] = 'Name ist erforderlich';
} else if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Gültige E-Mail-Adresse ist erforderlich';
} else if (empty($message)) {
    $errors[] = 'Nachricht ist erforderlich';
} else if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['errors' => $errors]);
    exit;
}

$log_data = "=== NEUE NACHRICHT - " . date('Y-m-d H:i:s') . " ===\n";
$log_data .= "Name: $name\n";
$log_data .= "E-Mail: $email\n";
$log_data .= "Nachricht: $message\n";
$log_data .= "==============================\n\n";

if (file_put_contents('logs/messages.log', $log_data, FILE_APPEND)) {
    echo json_encode(['success' => true, 'message' => 'Nachricht erfolgreich empfangen!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Speichern der Nachricht']);
}
?>