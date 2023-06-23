/* 
ThatStella7922 Landing Website "quotes" Handler
No I didn't have a better name for it

v2023.0623.0
*/

// Globals
const currentFullDate = new Date();
var currentMonth = currentFullDate.getMonth() + 1;
var currentDay = currentFullDate.getDate(); 
// End Globals

// Quotes
const quotes = [
    "You've shown me light<br>You gave me wings to fly<br>And I will always be thankful", // from Butterfly by kmac2021
    "Stars can't shine without darkness", // from Fragile Truths by D.H. Sidebottom
    "Sometimes you put walls up not to keep people out,<br>but to see who cares enough to break them down", // from Socrates
    "The secret of change is to focus all of your energy.<br>Not on fighting the old, but on building the new", // from Way of the Peaceful Warrior: A Book that Changes Lives by Dan Millman
    "So come, take my hand and<br>Come, make me feel what it's like<br>When love comes alive", // from Circles by KIRA
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind", // from Bernard M. Baruch
    "Another day, another dream?<br>Either way, make the most of it", // from myself
    "The only good is knowledge<br>And the only evil is ignorance", // from Socrates
    "Indecisiveness and hesitation.<br>Avoid them both or you will always be filled with regret", // from myself
];

function getRandomQuote() {
  var quote = quotes[~~(Math.random() * quotes.length)];
  return quote;
}

function setQuotesText() {
  switch (currentMonth) {
    // Switch statement for months, each month case can have a switch statement for days too
    case 3:
      switch (currentDay) {
        case 23:
          var quoteText = "Happy birthday to the girl that changed my life. Love you Eva!";
          break;
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

    case 6:
      switch (currentDay) {
        default:
          var quoteText = "Happy Pride Month! 🏳️‍🌈 🏳️‍⚧️";
          break;
      }
      break;

    case 7:
      switch (currentDay) {
        case 11:
          var quoteText = "Stella's Birthday. Happy birthday to me";
          break;
        default:
          var quoteText = getRandomQuote();
          break;
      }
      break;

    case 10:
      switch (currentDay) {
        default:
          var quoteText = "Happy LGBTQ+ History Month!<br>(US/Canada/Australia)";
          break;
      }
      break;

    default:
      var quoteText = getRandomQuote();
      break;
  }

    //console.log("setQuotesText() returned the following string:\n" + randomText);
    document.getElementById('quotep').innerHTML = quoteText;
}

// SHHHH SECRET
function manualSetQuotesText() {
  manualQuote = prompt("Enter the quote you want to set:");
  document.getElementById('quotep').innerHTML = manualQuote;
}

// End Quotes