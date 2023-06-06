let songindex=0;
    var pl4=document.getElementById('button4');
    var pl=document.getElementById('button2');
    var pl1=document.getElementById('button1');
    var pl2=document.getElementById('button3');
    var progressbar=document.getElementById('rangebar');
  
   let songs=[
      
        {songn:"veera rajaveera" ,filepath:"Kaanunna Kalyanam(PagalWorld.com.se).mp3",name:"dhanush1"},
        {songn:"maruvarthe" ,filepath:"maruvathe.mp3",name:"dhanush2"},
        {songn:"malare" ,filepath:"Sada-Nannu--From-Mahanati--Charulatha-Mani.mp3",name:"dhanush3"},
        {songn:"meri jan" ,filepath:"Meri Jaan (Gangubai Kathiawadi)-(PagalWorld.Ink).mp3",name:"dhanush4"},
        {songn:"aluma" ,filepath:"Sada-Nannu--From-Mahanati--Charulatha-Mani.mp3",name:"dhanush5"},
        {songn:"sada nannu" ,filepath:"Dhivara-SenSongsMp3.Co.mp3",name:"dhanush6"},
        {songn:"bhediya" ,filepath:"Apna Bana Le (Bhediya) - DjBaap.Net.mp3",name:"dhanush7"},
        {songn:"halamathi habibo" ,filepath:"Halamithi Habibo(PagalWorld.com.se).mp3",name:"dhanush8"},
        {songn:"nene kani nenei" ,filepath:"Buggey-Bangarama-Rajesh.mp3",name:"dhanush9"},
        {songn:"on the floor baby" ,filepath:"Sada-Nannu--From-Mahanati--Charulatha-Mani.mp3",name:"dhanush10"},
        {songn:"kanunna kalyanam" ,filepath:"Kaanunna Kalyanam(PagalWorld.com.se).mp3",name:"dhanush11"},
        {songn:"thenkeliye" ,filepath:"Manohara.mp3",name:"dhanush12"},
        {songn:"pathu thala" ,filepath:"Kaanunna Kalyanam(PagalWorld.com.se).mp3",name:"dhanush13"},
        {songn:"allantha doorala" ,filepath:"Allantha-Doorala--From-Aadavari-Matalaku-Ardhalu-Veruley--S.-P.-Balasubrahmanyam.mp3",name:"dhanush14"},
        {songn:"dhivara" ,filepath:"Dhivara-SenSongsMp3.Co.mp3",name:"dhanush15"},
        {songn:"dosthi" ,filepath:"Dosti - RRR 128 Kbps.mp3",name:"dhanush16"},
        {songn:"cheliya cheliya" ,filepath:"Cheliya Cheliya-SenSongsMp3.Co.mp3",name:"dhanush17"},
        {songn:"ninjil jil jil" ,filepath:"Dhivara-SenSongsMp3.Co.mp3",name:"dhanush18"},
        {songn:"manohara" ,filepath:"Manohara.mp3",name:"dhanush19"},
        {songn:"bugge bangarama" ,filepath:"Buggey-Bangarama-Rajesh.mp3",name:"dhanush20"},

        
  ];
  
 
     let audio = null; // Declare a variable to hold the active audio element
    
function music(filepath, name) {
    var audio1 = new Audio(filepath);

  document.getElementById(name).addEventListener('click', () => {
    if (audio !== null && audio !== audio1) {
      audio.pause(); // Pause the previous audio if it exists and is different from the current one
    }
    else
      {audio1.play();
      
    }
    pl4.addEventListener('click', () => {
      if (audio1.paused || audio1.currentTime <= 0) {
        audio1.play();
       
      }
    })
    pl.addEventListener('click',()=>
    {if (audio1.paused!=true && audio1.currentTime >0) {
      audio1.pause();
      
    }

    })
   
    audio = audio1; // Set the current audio element to the clicked one
  });
  
    

  audio1.addEventListener('timeupdate', () => {
    let pro = parseInt((audio1.currentTime / audio1.duration) * 100);
    progressbar.value = pro;
  });

  progressbar.addEventListener('change', () => {
    audio1.currentTime = (progressbar.value * audio1.duration) / 100;
  });

  pl2.addEventListener('click', () => {
    if (audio1.currentTime > 0 && audio1.currentTime <= audio1.duration) {
      audio1.currentTime += 10;
    }
  });

  pl1.addEventListener('click', () => {
    if (audio1.currentTime > 0 && audio1.currentTime <= audio1.duration) {
      audio1.currentTime -= 10;
    }
  });
  
  return audio1; // Return the audio element
}

for (let i = 0; i < songs.length; i++) {
  const song = songs[i];
  const audioElement = music(song.filepath, song.name);
  
  if (i === 0) {
    audio = audioElement; // Set the initial audio element
  }
}