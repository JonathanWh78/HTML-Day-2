//fizzbuzz

let num = 1;

while (num <= 100)
{
    if ((num % 3 == 0) && (num % 5 == 0)){
        console.log("FizzBuzz");}
    else if (num % 3 ==0){
        console.log("Fizz");}
    else if (num % 5 ==0){
        console.log("Buzz");}
    console.log(num);
    num++
}

//bottles of beer
let beer = 99;

while (beer != 0)
{
    console.log(`${beer} bottles of beer on the wall, ${beer} bottles of beer.Take one down and pass it around`)
    beer--
    if (beer ==0)
    {
        console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall")
    }
}