/* 
ThatStella7922 Landing Website Cat Handler

This presents a dialog for showing the cat video

v2023.1119.0
*/

function promptShowCat() {
  catPrompt = confirm("show cat?");
  if (catPrompt) {
    document.getElementById('catvideo-element').src = "//files.thatstel.la/media/important-videos/theCat.mp4";
    document.getElementById('catvideo-element').load();
    document.getElementById('catvideo').style.display = "inline-block";
    document.getElementById('catbutton-playpause').innerHTML = "Pause cat video";
    document.getElementById('catvideo-element').play();

    // disable the button
    document.getElementById("displayname").onclick = null;
  }
}

function playPauseCat() {
  if (document.getElementById('catvideo-element').paused) {
    document.getElementById('catvideo-element').play();
    document.getElementById('catbutton-playpause').innerHTML = "Pause cat video";
  } else {
    document.getElementById('catvideo-element').pause();
    document.getElementById('catbutton-playpause').innerHTML = "Play cat video";
  }
}