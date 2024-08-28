function upDate(previewPic){
  var src = previewPic.getAttribute( "src" );
  var alt = previewPic.getAttribute( "alt" );
  document.getElementById('image').style.backgroundImage = "url('" + src + "')";
  document.getElementById('image').innerHTML = alt;
  document.getElementById("image").style.backgroundColor = "#0726f0";
	}

function unDo(){
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
  document.getElementById("image").style.backgroundImage = "none";
  document.getElementById("image").style.backgroundColor = "#8e68ff";       
  }


