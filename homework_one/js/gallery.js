
function upDate(element){
  document.getElementById('image').innerHTML = element.alt;
  document.getElementById("image").style.backgroundColor = "#0726f0";
  document.getElementById("image").style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";
  }

function upDate2(element){
  document.getElementById('image').innerHTML = element.alt;
  document.getElementById("image").style.backgroundColor = "#0726f0";
  document.getElementById("image").style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG')";
  }

function upDate3(element){
  document.getElementById('image').innerHTML = element.alt;
  document.getElementById("image").style.backgroundColor = "#0726f0";
  document.getElementById("image").style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg')";
  }  
  
function unDo(){
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  document.getElementById("image").style.backgroundImage = "none";
  document.getElementById("image").style.backgroundColor = "#8e68ff";           
  }