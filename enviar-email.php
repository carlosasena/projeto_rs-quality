<?php
// ============================================
// RS QUALITY - FORMULÁRIO DE CONTATO
// ============================================

// Configuração
$para          = "comercial@rsseng.com.br";
$remetente     = "comercial@rsseng.com.br";
$assunto       = "Novo Contato via Site - RS Quality";

// Sanitizar e validar dados
$nome     = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$tel      = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$email    = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$msg      = filter_input(INPUT_POST, 'comentario', FILTER_SANITIZE_STRING);

// Validação básica
if (!$nome || !$email || !$tel) {
    echo "<script>
        alert('Por favor, preencha todos os campos obrigatórios.');
        window.history.back();
    </script>";
    exit;
}

// Formatar corpo do e-mail
$corpo = "
<!DOCTYPE html>
<html lang='pt-br'>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #111132; color: #968d4c; padding: 15px; text-align: center; }
        .content { padding: 20px; background: #f8f9fa; }
        .destaque { background: #968d4c; color: white; padding: 10px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nova solicitação de contato - RS Quality</h2>
        </div>
        <div class='content'>
            <div class='destaque'>
                <strong>Nome:</strong> $nome<br>
                <strong>Telefone:</strong> $tel<br>
                <strong>E-mail:</strong> $email
            </div>
            <p><strong>Mensagem:</strong></p>
            <p>$msg</p>
            <hr>
            <p><small>Enviado em: " . date('d/m/Y H:i:s') . "</small></p>
        </div>
    </div>
</body>
</html>
";

// Headers para e-mail HTML
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Site RS Quality <$remetente>" . "\r\n";
$headers .= "Reply-To: $nome <$email>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar e-mail
if (mail($para, $assunto, $corpo, $headers)) {
    echo "<script>
        alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
        window.location.href = 'index.html';
    </script>";
} else {
    echo "<script>
        alert('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
        window.history.back();
    </script>";
}
?>