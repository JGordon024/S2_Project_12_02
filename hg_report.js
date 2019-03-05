"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   
   
   Filename: hg_report.js
	
*/
// Creates a variable that creates an HTML format that plugs in arrays from another file. 
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB</th><td>" + itemESRB + "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;
// Brings in the first and only article element and assigns it to game report
document.getElementsByTagName("article")[0].innerHTML = gameReport;
// Gives the initial value of ratingSum 0
var ratingSum = 0;
// The ratingCount variable is being asigned the value of the length of the ratings
var ratingCount = ratings.length;
// Creates a loop that adds the value of the index of ratings to ratingSum
for (var i = 0; i <= ratingCount; i++) {
    ratingSum += ratings[i];
}
//the rating average variable is equal to the ratingSum divided by ratingCount
var ratingAvg = ratingSum / ratingCount;
// Creates a ratingReport that will be the foundating for the reviews
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingAvg + "out of 5 stars (" + ratingCount + " reviews)</h2>";
// Creates a for loop that runs up to 3 times, leaving a total of 3 reviews
for (var i = 0; i <= 2; i++) {

    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";
    // A nested variale that brings in the star image that be used for rating
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";

    }
    //ratingReport is having the end of the elements added to it, which is the end of the HTML
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}
// ratingReport is having the first aside element brought in
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;