/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votinAge = 18
console.log(votinAge > 18);



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let a = 5;
let b = 3;
if (b < a) {
    a += b;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let a = "1999";
Number(a);
parseInt(a);



//Task d: Write a function to multiply a*b 


function times(a, b) {
    let product = a * b;
    return product;
}


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function dogYears(a) {
    let dYears = a * 7;
    let msg = "1 human year is equal to 7 dog years";
    console.log(dYears + "" + msg);
}


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(p, y) {
    let feedADay;
    if (y >= 1) {
        if (p <= 5) {
            feedADay = .05 * p;
            return feedADay * 16;
        }
        else if (p > 5 && p <= 10) {
            feedADay = .04 * p;
            return feedADay * 16;
        }
        else if (p > 10 && p <= 15) {
            feedADay = .03 * p;
            return feedADay * 16;
        }
        else if (p > 15) {
            feedADay = .02 * p;
            return feedADay * 16;
        } else {
            return "Invalid!!! That is not a dog!!";
        }
    }
    else {
        if (y >= .16 && y <= .33) {

            feedADay = .1 * p;
            return feedADay * 16;
        }
        else if (y >= .33 && y >= .58) {
            feedADay = .05 * p;
            return feedADay * 16;
        }
        else if (y >= .58 && y <= 1) {
            feedADay = .04 * p;
            return feedADay * 16;
        }
        else {
            return "Puppy is too young, should still be nursing";
        }
    }


    
}


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function RPC(a) {
    let pChoice;
    function choiceConvert(s) {

        if (s == "rock") {
        return 1
    }
    else if (s == "scissors") {
        pChoice = 2;
    }
    else if (s == "paper") {
        
    }
    else {
        return "You entered an invalid argument";
    }

    let cChoice = math.random() * 3;

}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





