/* 
ThatStella7922 Landing Website EDR Handler

This doesn't actually do anything useful, it just has a function for blinding the user lmfao

v2023.0918.3
*/

function promptSetMaxEDRBrightness() {
  edrBrightnessPrompt = confirm("Enable maximum EDR brightness for all elements on the page? The page already has some subtle EDR elements!\nOn capable displays, this will be extremely bright. Otherwise, it'll clip to white.\nAdditionally, the EDR stuff is only supported on WebKit-based browsers like Safari.");
  if (edrBrightnessPrompt) {
    // set max xdr on everything
    document.getElementById("verticalcontainer").className = "edr-max";
    
    // unset xdr on a few elements so they're not dimmer
    document.getElementById("textabovelinks").className = "";
    document.getElementById("navigation-buttons").className = "links";
    document.getElementById("social-link-buttons-id").className = "social-link-buttons";
    document.getElementById("about-heading").className = "social-link-buttons";

    // disable the button
    document.getElementById("edr-enable").onclick = null;
    document.getElementById('edr-enable').innerHTML = "<strong>EDR maxed!</strong>";
  }
}
