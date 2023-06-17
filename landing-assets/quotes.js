/* 
ThatStella7922 Landing Website 'quotes' Handler
No I didn't have a better name for it

v2023.0515.0
*/

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

function setQuotesText() {
    const currentFullDate = new Date();
    const currentMonth = currentFullDate.getMonth() + 1;
    console.log(currentMonth)
  
    switch (currentMonth) {
      case 6:
        var randomText = "Happy Pride Month! 🏳️‍🌈🏳️‍⚧️"
      
      default:
        var randomText = quotes[~~(Math.random() * quotes.length)];
    }

    console.log(randomText);
}

function setQuotesTextTemp() {
    var randomText = quotes[~~(Math.random() * quotes.length)];
    document.getElementById('quotep').innerHTML = randomText;
}