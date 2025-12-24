//GOAL: ensure that the add item button adds items to a ul when clicked. employ a click event listener and a separate function to handle the logic of adding the stuff to the list
  //there's no input so i'll need to add items from the coding side

                       //THOUGHTS//
  1. //aaahhh i could have added DOM content loaded to my input function thing to have it actually diplay the input in the div.

  2. i wonder would codegrade work if i removed one of the tests from the file. like does it have its OWN built-in tests or does it work with the ones in the module. i am thinking built-in cause there's a time i had manipulated a test but codegrade was working with the original version

  3. writing the test is the main part of this tech lesson

  4. jsdom does not fully emulate browser behavior. this means that css styles and some advanced apis may not work. what this means for me is don't go crazy with your fave part of coding: css

  5. i am getting some weird jest error over there about some split thing in a module that doesn't even sound like it is in this file. it is in user/share/node/something. lemme ask chat what this is about.
     //answer: the issues is about using a super new version of node for an older jest version. so what i need to do now is downgrade node or simply do npm install actually... yassss that was the issue
  
  6. i know that how i have written my event listener is wrong, with 3 params but why? why is it wrong??
      //answer: i feel like it has something to do with the fact that domcontentloaded is a whole event on its own so it is like i am double calling events. yasssss LORD!!! sheeesh you are on a roll today, Father. well you always are but today it's almost like its the eve of your son's birth or something. anywho, it worked when i divided up the events. and the test has passed. that green-tick has to be theeeeee most satisfying thing EVER!! i still want to understand exactly why that wouldn't work though...
      //add event listener format: .addEventListener(type (string), handler function, (optional) options) 
      //DOM content loaded means that the html has been parsed and the document exists
      //DOM content loaded can only be fired by document not by an element
      //DOM content loaded is time based. click is interaction based. the two can never in a millions live together
      //tests use DOM content loaded because script order is unpredictable in jsdom
      //event listeners listen to one event at a time
      //


                                                //STRATEGIC QUESTIONS//
1. why do i need to have dom content loaded, my button click works fine without it anyway?
     answer: it is a good safety and predictability measure
     
