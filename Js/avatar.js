const fileInput = document.querySelector(".input-img-perfil[type=file]");
const avatar = document.querySelector(".perfil-picture");

avatar.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", event => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onloadend = () => {
        avatar.setAttribute("aria-label", file.name);
        avatar.style.background = `url(${reader.result}) center center/cover`;
    }
});
