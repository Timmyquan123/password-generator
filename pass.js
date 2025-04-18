// 🔐 Password Generator by Timmy ✨

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const passwordField = document.getElementById("password");

// Update password length display
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers   = document.getElementById("numbers").checked;
  const useSymbols   = document.getElementById("symbols").checked;
  const length       = +lengthSlider.value;

  const charSets = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
  };

  let availableChars = "";
  if (useUppercase) availableChars += charSets.upper;
  if (useLowercase) availableChars += charSets.lower;
  if (useNumbers)   availableChars += charSets.numbers;
  if (useSymbols)   availableChars += charSets.symbols;

  if (!availableChars) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  passwordField.value = password;
}

function copyPassword() {
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
