function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none") {
        chatbox.style.display = "block";
    } else {
        chatbox.style.display = "none";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado. ¡Gracias por contactarnos!');
    this.reset();
});