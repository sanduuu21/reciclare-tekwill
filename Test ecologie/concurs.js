function uploadFile() {
    const fileInput = document.getElementById("file-upload");
    const messageDiv = document.getElementById("message");

    if (fileInput.files.length > 0) {
        messageDiv.innerHTML = `<p style='color: green;'>Fișierul "${fileInput.files[0].name}" a fost încărcat cu succes!</p>`;
    } else {
        messageDiv.innerHTML = `<p style='color: red;'>Te rog să selectezi un fișier înainte de a trimite.</p>`;
    }
}