/* 
ThatStella7922 Landing Website 'quotes' Handler
No I didn't have a better name for it

v2023.0418.0
*/

const quotes = [
    "You've shown me light<br>You gave me wings to fly<br>And I will always be thankful", // from Butterfly by kmac2021
    "Stars can't shine without darkness", // from Fragile Truths by D.H. Sidebottom
    "Sometimes you put walls up not to keep people out,<br>but to see who cares enough to break them down", // from Socrates
    "Let me forget everything, still moonlight shines on us<br>Broken heart, I don't want you to find and take a look at<br>I swear on the darkest night I'll end it all, <strong>and Testify</strong>", // from Testify by Mournfinale
    "Knowledge may give weight, but accomplishments give lustre, and many more people see than weigh", // from Philip Stanhope
    "Somewhere, someone is still thinking about someone else<br>Even in times of change what matters, will last forever", // from God Sees All by Ethyria
    "You don't know how broken someone may be, so be kind", // from myself
    "There's no more night, blue skies forever<br>'Cause we're the masters of our own fate<br>We're the captains of our own souls", // from Lust for Life by Lana Del Rey
    "The secret of change is to focus all of your energy.<br>Not on fighting the old, but on building the new", // from Way of the Peaceful Warrior: A Book that Changes Lives by Dan Millman
    "So come, take my hand and<br>Come, make me feel what it's like<br>When love comes alive", // from Circles by KIRA
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind", // from Bernard M. Baruch
    "Another day, another dream?<br>Either way, make the most of it", // from myself
    "The only good is knowledge<br>And the only evil is ignorance", // from Socrates
];

function setQuotesText() {
    var randomText = quotes[~~(Math.random() * quotes.length)];
    document.getElementById('quotep').innerHTML = randomText;
}