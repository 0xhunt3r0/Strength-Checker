const strengthFill = document.getElementById("strengthFill");
const passwordInput = document.getElementById("pass-input");

const badgeVeryWeak = document.getElementById("vweak");
const badgeWeak = document.getElementById("weak");
const badgeStrong = document.getElementById("strong");

function checkStrength() {
    const pass = passwordInput.value;
    let score = 0;

    if (pass.length > 4) score++;
    if (pass.length > 7) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    // Reset
    badgeVeryWeak.classList.remove("strength-active");
    badgeWeak.classList.remove("strength-active");
    badgeStrong.classList.remove("strength-active");

    // Update bar + label
    if (score <= 2) {
    strengthFill.style.width = "25%";
    strengthFill.style.background = "red";
    badgeVeryWeak.classList.add("strength-active");
    } else if (score <= 4) {
    strengthFill.style.width = "60%";
    strengthFill.style.background = "orange";
    badgeWeak.classList.add("strength-active");
    } else {
    strengthFill.style.width = "100%";
    strengthFill.style.background = "green";
    badgeStrong.classList.add("strength-active");
    }
}

document.getElementById("checkBtn").onclick = checkStrength;

document.getElementById("generateBtn").onclick = function () {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";

    for (let i = 0; i < 12; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordInput.value = pass;
    checkStrength();
};
// Show / Hide Password
document.getElementById("togglePassword").onclick = function () {
let input = document.getElementById("passwordInput");
let icon = this.querySelector("i");

if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
} else {
    input.type = "password";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
}
};


