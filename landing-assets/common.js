/* 
ThatStella7922 Landing Website Common JS Code

v2024.0819.0
*/

/*
Return the value of the requested query string

Ex: thatstel.la?MyArg=hi&MyOtherArg=hello
    Run getQueryStringArg("myArg") and return "hi"
    Run getQueryStringArg("myOtherArg") and return "hello"
*/
function getQueryStringArg(argName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === argName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}