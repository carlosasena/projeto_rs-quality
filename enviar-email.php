<?php
// Coleta os dados do formulário
$nome     = $_POST['nome'];
$tel      = $_POST['telefone'];
$email    = $_POST['email'];
$msg      = $_POST['comentario'];

// Configuração para Locaweb: Remetente deve ser do próprio domínio
$para          = "comercial@rsseng.com.br";
$remetente     = "comercial@rsseng.com.br"; 
$assunto       = "Novo Contato via Site - RS Quality";

// Corpo do e-mail formatado
$corpo = "
    <h2>Nova solicitação de contato recebida</h2>
    <p><strong>Nome:</strong> $nome</p>
    <p><strong>Telefone:</strong> $tel</p>
    <p><strong>E-mail:</strong> $email</p>
    <p><strong>Mensagem:</strong> $msg</p>
";

// Headers para e-mail HTML
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Site RS Quality <$remetente>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Envia e redireciona
if(mail($para, $assunto, $corpo, $headers)){
    echo "<script>alert('Sua mensagem foi enviada com sucesso!'); window.location.href='index.html';</script>";
} else {
    echo "<script>alert('Erro ao enviar por e-mail. Por favor, tente pelo WhatsApp.'); window.history.back();</script>";
}
?>