const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const insertBtn = document.getElementById("submitData");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clear");

insertBtn.onclick = function () {
  const key = inpKey.value;
  const value = inpValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
};

clearBtn.onclick = function () {
  localStorage.clear();
  location.reload();
};

const entries = Object.entries(localStorage);

for (const [key, value] of entries) {
  output.innerHTML += `${key}: ${value}<br>`;
}

// Same syntax for session storage, the difference is that the session storage object is cleared once the window reloads

sessionStorage.setItem("name", "Miguel");

const name = sessionStorage.getItem("name");

const key = sessionStorage.key(name);
