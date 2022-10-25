
function loadData(){
    console.log("loading data");
}


function myName(){
    console.log("Brenda Allemand")
}


function sayHello(first, last){
    
    console.log("Hello " + first + " " + last);
}

function taxReport(month, year) {
    // MAGIC HERE
    if(month < 1) {
        console.error("Error, invalid month number");
        return; // get out
    }

    let result = month + year;
    return result;
}

function testArray1(){
    //for loop 1,2,...20
    //except 13 and 17
    //debugger;
    for(let i=1; i<21; i++) {
        //if i is not 13 and print the number
        if(i != 13 && i != 17) {
        console.log(i);
        }
    }
}
function testOR(passcode){
    let key1= "qwerty";
    let key2= "GODMODE";
    let key3= "Pretty please";

    if(passcode === key1 || passcode === key2 || passcode === key3) {
        console.log("allowed");
        return "OK";
    }
    else{
        console.error("not allowed");
        return "FAILED";
    }
}

function testArray2() {
    let pets = [
        'Aardvark',
        'Albatross',
        'Alligator',
        'Alpaca',
        'Ant',
        'Anteater',
        'Antelope',
        'Ape',
        'Armadillo',
        'Donkey',
        'Baboon',
        'Badger',
        'Barracuda',
        'Bat',
        'Bear',
        'Beaver',
        'Bee',
        'Bison',
        'Boar',
        'Buffalo',
        'Butterfly',
        'Camel',
        'Capybara',
        'Caribou',
        'Cassowary',
        'Cat',
        'Caterpillar',
        'Cattle',
        'Chamois',
        'Cheetah',
        'Chicken',
        'Chimpanzee',
        'Chinchilla',
        'Chough',
        'Clam',
        'Cobra',
        'Cockroach',
        'Cod',
      ];

    //add new elements to array
    pets.push("Django");

    //count
    console.log("There are: " + pets.length);

    //read
    console.log(pets[0]); //read first element

    //for loop to travel/iterate the array
    for(let i=0; i< pets.length; i++) {
        console.log(pets[i]);
    }
    //delete pets
    let index = 0;    
    pets = pets.splice(index,1);
}


function init(){ 
    console.log("Intro page")

    loadData();
    myName();
    
    let lastName = "Allemand";
    sayHello("Brenda", lastName);//Hello Brenda

    let total = taxReport(2,2022);
    console.log(total);

    let another = taxReport(1, 10);

    testArray1();

    testArray2();
}

window.onload = init;