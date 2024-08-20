/* 
ThatStella7922 Landing Website NTAS Widget Handler

(see https://www.dhs.gov/ntas-widget, I added because lordofpc734 in Fruitycord thought it would be funny)

v2024.0819.0
*/

// This loads the widget, and then unhides the div hosting it so it can be seen on the page
function showNtaWidget() {
    document.getElementById("ntaswidget-iframe").src = "https://www.dhs.gov/ntas/";
    document.getElementById("ntaswidget-container").style.display = "inline-block";
}

// Checks if the query string ntas is present and is set to 'show' (ex: thatstel.la?ntas=show), and show NTA widget if it is
function checkNtasPresentAndShow() {
    if (getQueryStringArg("ntas") == "show") {
        showNtaWidget()
    }
}