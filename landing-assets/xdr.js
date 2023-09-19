/* 
ThatStella7922 Landing Website XDR Handler

This doesn't actually do anything useful, it just has a function for blinding the user lmfao

v2023.0918.1
*/

function promptSetMaxXDRBrightness() {
  xdrBrightnessPrompt = confirm("Enable maximum XDR brightness for all elements on the page? The page already has some subtle XDR elements!\nOn capable displays, this will be extremely bright. Otherwise, it'll clip to white.\nAdditionally, the XDR stuff is supported on WebKit-based browsers like Safari.");
  if (xdrBrightnessPrompt) {
    // set max xdr on everything
    document.getElementById("verticalcontainer").className = "xdr-max";
    
    // unset xdr on a few elements so they're not dimmer
    document.getElementById("textabovelinks").className = "";
    document.getElementById("navigation-buttons").className = "links";
    document.getElementById("social-link-buttons-id").className = "social-link-buttons";
    document.getElementById("about-heading").className = "social-link-buttons";

    // disable the button
    document.getElementById("xdr-enable").onclick = null;
    document.getElementById('xdr-enable').innerHTML = "<strong>XDR maxed!</strong>";
  }
}
