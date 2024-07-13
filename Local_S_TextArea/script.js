const textArea = document.getElementById("savedText");
const dltBtn = document.getElementById("dlt");

const data = localStorage.getItem("saveMemory");
textArea.value = data;

savedText.addEventListener("keydown", () => {
  // debugger;
  setTimeout(() => {
    const text = textArea.value;
    console.log(text);
    localStorage.setItem("saveMemory", text);
  }, 0);
});

dltBtn.addEventListener("click", () => {
    localStorage.removeItem("saveMemory");
  window.location.reload();
});
