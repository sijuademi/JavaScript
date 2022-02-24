var scores, roundScore, activePlayer;

scores = [0,0];
roundScore= 0;
activePlayer = 0;

//dice = Math.floor(Math.random() * 6) + 1;

// Use inner HTML to write HTML in your JS

//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//document.querySelector('#current--' + activePlayer).textContent = dice;

//var x = document.querySelector('#score--0').textContent;
//console.log(x);


/* function btn() {
   // Do something here
   // This button function is called the callback because it is called by another function and not by us.
   
}
btn();

document.querySelector('.btn--roll').addEventListener('click', btn ); */
// we can also write our function in the event listener
document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--roll').addEventListener('click', function() {

   // 1. Random number
   var dice = Math.floor(Math.random() * 6) + 1;

   //2. Display the result
   var diceDOM = document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';

   //3. Update the round score IF the rolled number was NOT a 1

   if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector('#current--' + activePlayer).textContent = roundScore;
   } else {
      //Next player
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;

      document.getElementById('current--0').textContent = '0';
      document.getElementById('current--0').textContent = '1';

      //document.querySelector('.player--0-panel').classList.remove('active');
      //document.querySelector('.player--1-panel').classList.add('active');
   }
} );
