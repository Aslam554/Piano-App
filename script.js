window.onload = () => {
  let s = [
    "",
    "music/c6-102822.mp3",
    "music/piano-c_Csh_major.wav",
    "music/d6-82020.mp3",
    "music/d6sh-82018.mp3",
    "music/e6-82016.mp3",

    "music/f6-102819.mp3",
    "music/piano-f_Fsh_major.wav",
    "music/g6-82013.mp3",
    "music/piano-g_Gsh_major.wav",
    "music/a6-102820.mp3",
    "music/a6sh-82015.mp3",
    "music/b6-82017.mp3",
    "music/c6-102822.mp3"
  ];

  let label = ["", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"];

  let aud = new Audio();
  let btn = document.querySelectorAll("button");
  let sh = document.querySelector("#Sh")
  let btlab = document.querySelector("#labl")


  btn.forEach((e, i) => {
    btn[i].onmouseover = () => {
      if (i != 0) {
        aud.src = s[i];
        aud.play();
        aud.CurrentTime = 0;
        btn[i].style.background = 'orange'
        btlab.innerText = label[i];

      }
      btn[i].onmouseout = () => {
        btn[i].style.background = 'white'

      }


    }
  })
  //alert(btn.length);
  setTimeout(() => {
    //  alert("Hi I am Mr.Ads");
    setTimeout(() => {
      //  alert("Close me");
    }, 2000)

  }, 10000)
}