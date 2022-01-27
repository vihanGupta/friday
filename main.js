var speechRecognition = window.webkitSpeechRecognition;
var answer="";
var Recognition = new speechRecognition();
var synth = speechSynthesis;
var system = "";
var answer = "";
var command = "";
var Do = "";
var Name = "";
var opened = "";
var classifier = "";
var video = "";
var music = "";
var reg = "";
function ok()
{
 command = document.getElementById("command").value;
 Do = document.getElementById("do").value;
 localStorage.setItem("command",command);
   localStorage.setItem("Do",Do);
}

function speak()
{    
  setInterval(() => {
    Recognition.start();
    answer = "";
  }, 1000);
}

Recognition.onresult = function(event)
{
    answer = event.results[0][0].transcript;
    console.log(answer);


    if(answer == "Friday turn on the system")
    {
     document.getElementById("result").innerHTML = "Ok sir,Turning on system "; 
     Name = localStorage.getItem("Name");
     speach = "Hello "+Name;
     utterthis = new  SpeechSynthesisUtterance(speach);
     synth.speak(utterthis);
     system = "on";
    }

    if(system == "on")
    {

    if(answer == "Friday what is the time")
   {
       m = new Date();
       Time = m.replace(16);
       utterthis = new  SpeechSynthesisUtterance(Time);
     document.getElementById("result").innerHTML = Time;
     synth.speak(utterthis);
   }


   if(system == "on")
   {
       if(answer == "Friday turn off the system")
       {
        document.getElementById("result").innerHTML = "Ok sir,Turning off system";
        ok = "Ok sir,Turning off system";
     utterthis = new  SpeechSynthesisUtterance(ok);
     synth.speak(utterthis);
     system = "";
       }
   }

   if(answer == "hello Bella")
   {
    document.getElementById("result").innerHTML = "Hello , What is you'r name";
    g = "Hello , What is you'r name";
    utterthis = new  SpeechSynthesisUtterance(g);
    synth.speak(utterthis);
    setTimeout(function() {
      vo = answer;
     localStorage.setItem("name",vo);
      console.log("got the name");    
    }, 8000);
   }  


   
   if(answer == localStorage.getItem("command"))
   {
    opened = open(localStorage.getItem("Do"),'_blank')
       document.getElementById("result").innerHTML = "Command is "+localStorage.getItem("command");
       d = "Ok sir opening"+localStorage.getItem("Do");
       utterthis = new  SpeechSynthesisUtterance(d);
    synth.speak(utterthis);
   }


   if(answer == "Friday what is my location")
   {
       navigator.geolocation.getCurrentPosition(function(loc)
       {
           console.log(loc);
           c = "longitude = "+loc.coords.longitude+", latitude"+loc.coords.latitude;
           utterthis = new  SpeechSynthesisUtterance(c);
        synth.speak(utterthis);
    document.getElementById("result").innerHTML = c;
       })
   }


   if(answer == "Friday open the regular")
   {
    window.open("https://web.whatsapp.com/",'_blank');
    e = "Enjoy,Sir"
    utterthis = new SpeechSynthesisUtterance(e);
    synth.speak(utterthis)
    setTimeout(function()
       {
        window.open("https://www.youtube.com/",);
       },4000);
       off()
   }

   if(answer.indexOf("Friday search for") > -1)
   {
     Mystring = answer.replace("Friday search for","");
     f ="Ok sir,Searching for"+Mystring;
     utterthis = new SpeechSynthesisUtterance(f);
    synth.speak(utterthis)
     window.open("https://www.google.com/search?q="+Mystring+"&rlz=1C1CHBF_enIN976IN976&oq=google&aqs=chrome..69i57j46i131i199i433i465i512j69i60l2j69i65l2j69i60l2.1844j0j7&sourceid=chrome&ie=UTF-8",'_blank');
   }
   if(answer.indexOf("Friday play")!== -1)
   {
     mystring = answer.replace("Friday play","");
     opened = window.open("https://www.youtube.com/results?search_query="+mystring,);
   }
   if(answer == "Friday close")
   {
     opened.close()
    }
    if(answer == "Friday I want to do some coding")
    {
      h ="On it ,Sir";
      utterthis = new SpeechSynthesisUtterance(h);
     synth.speak(utterthis)
     opened = window.open("https://codepen.io/")
    }
    if(answer == "alert")
    {
      y ="we we we we we we we we we we we we we we we we we we  we we we we we we  we we we we we we  we we we we we we  wo wo wo wo wo wo wo wo  wo wo wo wo wo wo wo wo  wo wo wo wo wo wo wo wo  wo wo wo wo wo wo wo wo  wo wo wo wo wo wo wo wo  wo wo wo wo wo wo wo wo  wo wo wo wo wo wo wo wo ";
      utterthis = new SpeechSynthesisUtterance(y);
     synth.speak(utterthis)
     alert("Alert danger danger");
    }
    if(answer.indexOf("Friday what is") > -1)
    {
      resul = answer.replace("Friday what is","");
      console.log(resul);
      if(resul.indexOf("+") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 + num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }
      


      if(answer.indexOf("Friday what is") > -1)
    {
      resul = answer.replace("Friday what is","");
      console.log(resul);
      if(resul.indexOf("plus") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 + num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }}

      if(resul.indexOf("%"))
      {
        reg = /\d+/g;
        lo = resul.match(reg);

        
        numone = lo[0] - 0;
        numetwo = lo[1] - 0;

        percent = numone/100;
        per = percent*numetwo;
        percentage = per.toFixed(0);
        console.log(percentage)
        utterthis = new SpeechSynthesisUtterance("The answer is, "+percentage);
        synth.speak(utterthis)
        utterthis = new SpeechSynthesisUtterance("The answer is in decimals"+per)
        synth.speak(utterthis)
      }

      if(resul.indexOf("-") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 - num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }


      if(resul.indexOf("minus") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 - num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }


      if(resul.indexOf("multiply by") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 - num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }


      if(resul.indexOf("x") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 * num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }
      if(resul.indexOf("/") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 / num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }
      if(resul.indexOf("divide") > -1)
      {
        reg = /\d+/g;
        lko = answer.match(reg);
        num1 = lko[0] * 1;
        num2 = lko[1] * 1;
        ans = num1 / num2;
        utterthis = new SpeechSynthesisUtterance("The answer is, "+ans);
     synth.speak(utterthis)
     document.getElementById("result").innerHTML = ans;
      }
    } 

    if(answer.indexOf("Friday open") > -1)
    {
      ans = answer.slice(12);
      opened = open("https://"+ans+"/",'blank_')
    }
    if(answer == "Friday")
    {
      utterthis = new SpeechSynthesisUtterance("Yes ,sir");
      synth.speak(utterthis)
    }
    if(answer == "Friday open webcam")
    {
      opened = open("https://vihangupta.github.io/webcam/",10,10);
    }
    if(answer.indexOf("Friday Wikipedia of") > -1)
    {
        wiki = answer.replace("Friday Wikipedia of" , "");
        console.log(wiki);
        opened = open("https://en.wikipedia.org/wiki/"+wiki);
        utterthis = new  SpeechSynthesisUtterance("Showing wikipedia of"+wiki);      
    }
}}
function off()
{
    system = "";
}
if(answer == "Friday what is the time")
{
    utterthis = new  SpeechSynthesisUtterance(Time);
  document.getElementById("result").innerHTML = Time;
  synth.speak(utterthis);
}
  