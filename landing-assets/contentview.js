/* 
ThatStella7922 Landing Website ContentView

This allows the user to switch between the different views (About, Projects) on the site

v2023.1128.2
*/

// about is to be selected by default so hide the projects item
function setupInitialContentView() {
    document.getElementById('contentview-projects-content').style.display = "none";
    document.getElementById('contentview-projects-heading').classList.remove('contentview-selected');
    document.getElementById('contentview-projects-heading').classList.add('contentview-notselected');
}

const headingElements = [
    "contentview-about-heading",
    "contentview-projects-heading",
];

const contentElements = [
    "contentview-about-content",
    "contentview-projects-content",
];

/*
Supply a base name, like contentview-about and the function will control the
contentview-about-heading and contentview-about-content automatically
*/
function selectItem(elementID) {    
    // deselect all header items
    headingElements.forEach(function (item, index) {
        document.getElementById(item).classList.remove('contentview-selected');
        document.getElementById(item).classList.add('contentview-notselected');
    });

    // hide all content items
    contentElements.forEach(function (item, index) {
        document.getElementById(item).style.display = "none";
    });

    // select the passed header item
    document.getElementById(elementID + '-heading').classList.remove('contentview-notselected');
    document.getElementById(elementID + '-heading').classList.add('contentview-selected');
    
    // show the passsed content item
    document.getElementById(elementID + '-content').style.display = "block";
}