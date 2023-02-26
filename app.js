function passwordEye() {
    let password = document.getElementById("password");
    let eyeV = document.getElementById("eye_v");
    let eyeH = document.getElementById("eye_h");

    if (password.type === 'password') {
        password.type = 'text';
        eyeV.style.display = "block";
        eyeH.style.display = "none";
    }
    else {
        password.type = 'password';
        eyeV.style.display = "none";
        eyeH.style.display = "block";
    }
}