const tombol = document.getElementById("tombol");
const input = document.getElementById("input");
const boxdua = document.querySelector(".dua");
const boxsatu = document.querySelector(".satu");
input.focus();

let sample = [
  {
    chat: "Good to hear that 💖, how i can help you?",
  },
  {
    chat: "Hopefully success in next time ✨",
  },
  {
    chat: "See you next time 🙌",
  },
  {
    chat: "Gm Sir 😁",
  },
  {
    chat: "Are you lonely ? need friend to talk ? 😊",
  },
  {
    chat: "Let's play with me ! ✨",
  },
  {
    chat: "Pain make you stronger ! 👍",
  },
  {
    chat: "Congrats for your achivement 🎶",
  },
  {
    chat: "If you tired rest don't give up 👏",
  },
];

let kotakKiri = (arr) => {
  let random = Math.round(Math.random() * sample.length);
  if (!sample[random].chat) {
    random = 0;
  }
  let kotak = document.createElement("div");
  kotak.className = "box dua";
  kotak.dataset.aos = "fade-right";
  kotak.dataset.aosDelay = 100;
  let h4 = document.createElement("h4");
  h4.textContent = sample[random].chat;
  kotak.append(h4);
  arr.after(kotak);
};

let kotakKanan = () => {
  let ketik = input.value;
  if (!ketik) {
    alert("Pesan wajib diisi ‼");
    input.focus();
    return;
  }
  let kotak = document.createElement("div");
  kotak.className = "box satu";
  kotak.dataset.aos = "fade-left";
  kotak.dataset.aosDelay = 200;
  let h4 = document.createElement("h4");
  h4.textContent = ketik;
  kotak.append(h4);
  boxdua.after(kotak);

  setTimeout(() => {
    kotakKiri(boxdua.nextElementSibling);
    input.value = "";
  }, 1000);
};

input.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    kotakKanan();
  }
});

tombol.addEventListener("click", (e) => {
  kotakKanan();
});
