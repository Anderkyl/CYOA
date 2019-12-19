let runIt = function(){
  if(document.getElementById("check1").checked){
    getUp();
  }else if(document.getElementById("check2").checked){
    sleepIn();
  }else if(document.getElementById("check3").checked){
    Eli();
  }else if(document.getElementById("check4").checked){
    sitOther();
  }
}





let openingScreen = function(){

  let content = "<p>You wake up, The sound of your alarm blaring violating your ears. Do you press snooze or get up?</p>";

  content+="<input type='radio' name='' id='check1'><label for='check1'>Get up</label><input type='radio' name='' id='check2'><label for='check2'>Press snooze</label><br><input type='button' value='Yes' onclick='runIt()'>"
  document.getElementById("content").innerHTML=content;

}

let getUp = function(){
  let content = "<p>You choose to wake up, rolling out of bed and quieting your alarm. After slowly puttering around your room to get ready, You make it to the bus stop in enough time and catch the bus.</p><br><p>You find yourself standing on your designated bus stop, and soon enough the bright yellow twinkie rolls to a stop in front of you. Now you must find a place to sit.</p><br><p>Your options are slim. There is boy in a black game of thrones hoodie, whose hair is styled in  a way that makes it seem like he spent hours on it. He seems like he won't bother you. Option two, however, Is a small girl who's face is in a permanant frown. very promising. So, Who do you choose?</p>";

  content+="<Input type='radio' name='' id='check1'><label for='check1'>Sit with the boy in the hoodie</label><input type='radio' name='' id='check2'><label for='check2'>Sit with living frownie face emoji</label><br><input type='button' value='submit choice' onclick='Eli()'>"
  document.getElementById("content").innerHTML=content;
 
 }


 let sleepIn = function(){
   let content = "<p> You choose to hit your snooze button, Allowing you to catch a few more hours of sweet, blissful sleep. Too bad you missed the bus and half of school. I am very disapointed in you.</p>";
   document.getElementById("content").innerHTML=content;
 }
 let Eli = function(){
   let content="<p>You choose to sit next to the boy in the Game of Thrones hoodie. Intrigued by his interest in the show, you strike up a conversation. You both talk until you arrive in the school's parking lot. After exiting the bus, you ask his name. His name is Eli. You nod, turning to go to class when he asks for your name. What do you do?</p>"

   content+="<input type='radio' name'' id='check1'><label for='check1'>Tell him your name</label><input type='radio' name='' id='check2'><label for='check2'>Pretend that you didn't hear him and walk away</label><br><input type='button' value='Submit choice' onclick='runIt()'>"
   document.getElementById("content").innerHTML=content;

  
 }

let sitOther = function(){
  let content="</p>You chose to sit with the option number two. As soon as you slide into the seat she scowls at you and begrudgingly adjusts her bag so that It doesn't touch you. You remain irritated with her behavior the entire bus ride and truck it to class as soon as you enter the school. You wondered if the boy in the hoodie would have treated you better.</p>"

  content+="<input type='button' value='Continue' onclick='runIt()'>"
  
  document.getElementById("content").innerHTML=content;
}
  
 let tellName = function(){
   let content = "<p> You decide that you want to tell him your name, but your mouth doesn't open and you find yourself silent. As if something were preventing you from doing so. Weird.</p><br><p>You exchange goodbye and before you walk away he tells you to find at lunch. How do you feel?</p>"

   content+="input type='radio' name'' id='check1'><label for='check1'>I feel great. I'm invited.</label><input type='radio' name='' id='check2'<label for='check2'>I'm not okay, What the hell happened to me?</label><br><input type='button' value='Submit choice' onclick='runIt()'>"
   document.getElementById("content").innerHTML=content;
 }
