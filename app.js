const playBtn = document.getElementById('play')
let a = 0
let hitSucessAudio = new Audio('./misc/hit_success.wav')
let hitFailAudio = new Audio('./misc/hit_fail.wav')

let paused = false


function begin(){

  setInterval(function animate(){

      if(!paused){



      document.getElementById(a).style.backgroundColor = 'transparent'

      a=Math.floor(Math.random()*9);
      document.getElementById(a).style.backgroundImage="url('./img/test.png')";
      
      setTimeout(function remove(){
        document.getElementById(a).style.backgroundImage="none"
      }, 500)

      }

    },520);

	  playBtn.style.display = "none"
 


}

const hit = (clicked_id)=>{


    document.getElementById(clicked_id).style.cursor = "url('./img/gavel_hit.png'), default"

    setTimeout(()=>{
      document.getElementById(clicked_id).style.cursor = "url('./img/gavel.png'), default"
    },100)
    

    if(parseInt(clicked_id)===a){

      paused = true
      hitSucessAudio.play()

      
     
      document.getElementById(a).style.backgroundColor = '#7cfc00'

      document.getElementById("score").innerHTML="Got them"
      document.getElementById("score").style.color="green"

      setTimeout(()=>{
        paused = false
      },4000)

    }else{

      hitFailAudio.play()

      document.getElementById(clicked_id).style.backgroundColor = '#dc143c'

      setTimeout(()=>{
        document.getElementById(clicked_id).style.backgroundColor = 'transparent'

      },200)

      document.getElementById("score").innerHTML="Too slow!";
      document.getElementById("score").style.color="red" 
    }

}






