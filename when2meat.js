let jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

const baconPattern = "https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0196/0562/rrbacon_1_shop_thumb.png"

setInterval(function(){
  $("#GroupGrid > div:last-child").css("background", "url('" + baconPattern + "')")
  $("#GroupGrid > div:last-child > div[id!='GroupSlots']").css("background", "rgb(255,255,255)")


  $("td[id*='GroupTime'][style*='51, 153, 0']").css("background", "rgba(0,0,0,0)")
  $("td[id*='GroupTime'][style*='339900']").css("background", "rgba(0,0,0,0)")
  
  
  $("#YouGrid > div:last-child").css("background", "url('" + baconPattern  + "')")
  $("#YouGrid > div:last-child > div[id!='GroupSlots']").css("background", "rgb(255,255,255)")
  
  
  $("td[id*='YouTime']:not([style*='339900'], [style*='255,222,222'])").css("background", "rgba(0,0,0,0)")
  $("td[id*='YouTime'][style*='255, 222, 222']").css("background", "rgb(255,255,255)")

  
  $("td[bgcolor]").css("background", "rgb(255,255,255)")
  $("td[bgcolor='#339900']").css("background", "url('" + baconPattern + "')")

  $("#MainBody").css("background", "linear-gradient(rgba(255, 255, 255, 0.85),rgba(255, 255, 255, 0.85)),url('https://3.bp.blogspot.com/-0aphAH5D7DA/V5-0Y9b14oI/AAAAAAAABTI/sUU1fwneTtI8GmI0H8aT00AIe-dzJrGmACLcB/s1600/Web-Article-Chef-Marcus-Samuelsson-Streetbird-Red-Rooster-Harlem-Tips-on-Roasting-Brining-a-Perfect-Chicken-Rotisserie-Recipe1.gif')")

}, 10);

