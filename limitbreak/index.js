document.getElementById("image-input").addEventListener("change", event => {
    const reader = new FileReader();
    reader.addEventListener("load", event => {
        document.getElementById("image").src = event.target.result;
        document.getElementById("caption").removeAttribute("hidden");
    });
    reader.readAsDataURL(event.target.files[0]);
});
