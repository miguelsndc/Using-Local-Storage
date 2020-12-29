const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const insertBtn = document.getElementById("submitData");
const output = document.getElementById("output");

insertBtn.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; ++i) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  output.innerHTML += `${key}: ${value}<br>`;
}
