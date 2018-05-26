    $(document).ready(function(){
      $(".heading-compose").click(function() {
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
      $(".side-two").css({

        "left": "-100%"
      });
    });

   $("#profile_id").click(function(){
$("#not_profile_content").css("display", "none");
$('#profile_content').show('slide', {direction: 'left'}, 500);
   });


 $("#non_profile_id").click(function(){
  $("#profile_content").css("display", "none");
$('#not_profile_content').show('slide', {direction: 'right'}, 500);

   });

   $("#unread_chat_id").click(function(){
$("#unread_chat_content").css("display", "block");
$("#read_chat_content").css("display", "none");
$(".unread_message").css("display", "none");

   });

  $("#read_chat_id").click(function(){
$("#unread_chat_content").css("display", "none");
$("#read_chat_content").css("display", "block");
   });
 });
   function test(clickedID){

     document.getElementById("chat_content").style.display = "block";
     document.getElementById("no_chat_content").style.display = "none";
     if ($("#"+clickedID).hasClass("unread_message_div")) {
  document.getElementsByClassName('unread_message')[clickedID-1].style.display="none";
}
var arr = [
        { fname : "Hritik Roshan", imagesource:"Images/pic1.jpg", receiver : "hello", sender: "hey sup?",receiver1:"Krish?",sender1:"Yeah",receiver2:"Where is Rakesh Uncle?"},
        { fname : "Govinda", imagesource:"Images/r.png", receiver : "hey", sender: "boliye",receiver1:"Santo Ji?",sender1:"Yeah",receiver2:"how you doin?"},
        { fname : "Anand", imagesource:"Images/a.png", receiver : "Amit Ji", sender: "Ji?",receiver1:"Babumoshay",sender1:"Ji janab",receiver2:"Jindago lambi nahi badi honi chahiye"},
        { fname : "Rohan", imagesource:"Images/s.png", receiver : "Hi whatsup?", sender: "ntng as such?",receiver1:"Best of luck",sender1:"Thanks a lot",receiver2:"How are you?"},
        { fname : "Divyansh", imagesource:"Images/d.jpg", receiver : "hey", sender: "bro",receiver1:"broo",sender1:"Broo",receiver2:"broooo"},
        { fname : "Tina", imagesource:"Images/t.png", receiver : "what doing", sender: "Fun",receiver1:"Not so good",sender1:"ok",receiver2:"All good!!"},
        { fname : "Manu", imagesource:"Images/m.png", receiver : "Hello", sender: "hi",receiver1:"All THE BEST",sender1:"Thanks a lot",receiver2:"Please send your no"},
        { fname : "Siddharth", imagesource:"Images/s.png", receiver : "I had reservation", sender: "at what time",receiver1:"11:30",sender1:"cool",receiver2:"There!"},
        { fname : "Gyan", imagesource:"Images/a.png", receiver : "Ok", sender: "ok",receiver1:"ok",sender1:"ok",receiver2:"Ok"},
        { fname : "Babumoshay", imagesource:"Images/r.png", receiver : "Hi", sender: "sup?",receiver1:"You got hitched",sender1:"No",receiver2:"I heard"}
      ]
    for(i=0;i<=arr.length;i++)
    {
      if(i==clickedID)
      {
document.getElementsByClassName('heading-name-meta')[0].innerHTML = arr[i].fname;
document.getElementsByClassName('message-text')[0].innerHTML = arr[i].receiver;
document.getElementsByClassName('message-text')[1].innerHTML = arr[i].sender;
document.getElementsByClassName('message-text')[2].innerHTML = arr[i].receiver1;
document.getElementsByClassName('message-text')[3].innerHTML = arr[i].sender1;
document.getElementsByClassName('message-text')[4].innerHTML = arr[i].receiver2;

    document.getElementById("imagecoll").src=arr[i].imagesource;
      }
    }
    }
function small_screen_function()
{
if ($(window).width() >=200 && $(window).width() <= 700 ) { 
  document.getElementById("chat_content").style.display = "block";
     document.getElementById("not_profile_content").style.display = "none";
}
}
function small_screen_content()
{
if ($(window).width() >=200 && $(window).width() <= 700 ) { 
  document.getElementById("chat_content").style.display = "none";
     document.getElementById("not_profile_content").style.display = "block";
}
}
