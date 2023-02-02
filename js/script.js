var audio = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/74375/08d829319d3c03251388ac75d8b6183431e6d635/mp3/_RedAlert.mp3");
//var audio =  new Audio('assets/audio.wav');

var timers_list = [
    {id: "timer-1", time: 1, status:"stop", original: 1},
    {id: "timer-2", time: 14400, status:"stop", original: 14400},
    {id: "timer-3", time: 14400, status:"stop", original: 14400},
    {id: "timer-4", time: 14400, status:"stop", original: 14400},
    {id: "timer-5", time: 14400, status:"stop", original: 14400},
    {id: "timer-6", time: 14400, status:"stop", original: 14400},
    {id: "timer-7", time: 14400, status:"stop", original: 14400},
    {id: "timer-8", time: 14400, status:"stop", original: 14400},
    {id: "timer-9", time: 14400, status:"stop", original: 14400},
    {id: "timer-10", time: 14400, status:"stop", original: 14400},
    {id: "timer-11", time: 14400, status:"stop", original: 14400},
    {id: "timer-12", time: 14400, status:"stop", original: 14400},
    {id: "timer-13", time: 14400, status:"stop", original: 14400},
    {id: "timer-14", time: 14400, status:"stop", original: 14400},
    {id: "timer-15", time: 14400, status:"stop", original: 14400},
    {id: "timer-16", time: 14400, status:"stop", original: 14400},
    {id: "timer-17", time: 14400, status:"stop", original: 14400},
    {id: "timer-18", time: 14400, status:"stop", original: 14400},
    {id: "timer-19", time: 14400, status:"stop", original: 14400},
    {id: "timer-20", time: 14400, status:"stop", original: 14400},
    {id: "timer-21", time: 14400, status:"stop", original: 14400},
    {id: "timer-22", time: 14400, status:"stop", original: 14400},
    {id: "timer-23", time: 14400, status:"stop", original: 14400},
    {id: "timer-24", time: 14400, status:"stop", original: 14400},
  ];
   
  function loadSite (){  
    let text = "";
    for (var i = 0; i < timers_list.length; i++){
      text += `
      <div class="timer" id="div-timer-${i+1}">
        <div class="innerContainer">
          <h4>Habitación ${i+1}</h4>
          <div class="timer-display">
            <span id="timer-${i+1}"></span>
          </div>
        </div>
        <div class="timer-controls">
          <button class="timerButton" onclick="startButton(${i})" id="start-${i+1}">Empezar</button>
          <button class="timerButton" onclick="pauseButton(${i})" id="pause-${i+1}">Pausa</button>
          <button class="timerButton" onclick="stopButton(${i})" id="reset-${i+1}">Reiniciar</button>
        </div>
      </div>
      `
    }
    document.getElementById('timerContainer').innerHTML = text;
  }

  function startButton(i){
    timers_list[i].status = "running";
  }
   
  function pauseButton(i){
    timers_list[i].status = "stop";
  }
   
  function stopButton(i){
    timers_list[i].status = "stop";
    timers_list[i].time = timers_list[i].original;
  }
   
  function newTimer(time){
    timers_list.push({id: "timer-" + (timers_list.length + 1), time: time, status:"stop", original:time});
    loadSite();
  }

  function hideAll(){
    for (let i = 0; i<timers_list.length; i++){
      document.getElementById(`div-timer-${i+1}`).style.display = "none";

    }
  }

  function showAll(){
    for (let i = 0; i<timers_list.length; i++){
      document.getElementById(`div-timer-${i+1}`).style = "timerButton";

    }
  }

  function searchRoom(){
    // alert('aqui')
    var room = document.getElementById("searchInput").value
    console.log(room)
    if(!isNaN(room)){
          hideAll()
          document.getElementById(`div-timer-${room}`).style = "timerButton";
        }
  }

  // function stopAlert(){
  //   alert('OK');
  //   audio.suspend();
  //   audio.stop();
  // }

  // audio.addEventListener('ended', function(){
  //   audio.play();
  // });

  let timer_main = setInterval(function() {
    for (let i = 0; i<timers_list.length; i++){
      if (timers_list[i].status == "running"){
        timers_list[i].time -= 1;
      }
      if (timers_list[i].time == 0 && timers_list[i].status == "running"){
        timers_list[i].status = "stop";
        audio.play();
        alert(`Se acabo el tiempo de la Habitación ${i+1}!`);
        timers_list[i].time = timers_list[i].original;
      }
       
      // document.getElementById(timers_list[i].id).innerHTML = timers_list[i].time;
      // display time in mm:ss format
      let hours = parseInt(timers_list[i].time/3600);
      let minutes = parseInt((timers_list[i].time%3600)/60);
      let seconds = timers_list[i].time%60;
      if (seconds < 10){
        seconds = "0" + seconds;
      }
      if (minutes < 10){
        minutes = "0" + minutes;
      }
      if (hours < 10){
        hours = "0" + hours;
      }
      try{
        document.getElementById(timers_list[i].id).innerHTML = hours + ":"  + minutes + ":" + seconds;
      }catch(err){
        console.log(err);
      }
       
   
    }
  }, 1000);