/* 
ThatStella7922 Landing Website Cat Handler

This presents a dialog for showing the cat video

v2023.1030.0
*/

function promptShowCat() {
  catPrompt = confirm("show cat?");
  if (catPrompt) {
    document.getElementById('catvideo').style.display = "inline-block";
    document.getElementById('catvideo-element').play();

    // disable the button
    document.getElementById("displayname").onclick = null;
  }
}
