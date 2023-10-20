

const randomNumber = Math.floor(Math.random() * 250) + 1
    console.log('Random Number', randomNumber)

    function checkGuess() {
      let myGuess = myGuess.value
      if (myGuess === randomNumber) {
        window.alert = "You got it right!"
      } else if (myGuess > randomNumber) {
        window.alert = "Your guess was " + myGuess + ". That's too high. Try Again!"
      } else if (myGuess < randomNumber) {
        window.alert = "Your guess was " + myGuess + ". That's too low. Try Again!"
      }
    }

  window.alert(submitGuess.addEventListener('click', checkGuess))


// window.alert("Your guess was " + myGuess + ". That's too high. Try Again!")