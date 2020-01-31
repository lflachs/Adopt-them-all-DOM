import animals from ("./animals.js");
var isDog = animal => animal.species === 'dog';

var dogs = animals.filter(isDog);

const root = document.getElementById('root');

const oldestAnimal = animals.reduce((biggest, animals) => {
    debugger;
    console.log(animals);
    if (biggest.age < animals.age) {
        return animals
    }
    else {
        return biggest
    }
    return biggest
})

var smallest = animals.reduce((smallest, animal) => {
    if (smallest < animal) {
        return smallest
    }
    else {
        return animal
    }
    return smallest
})


var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]




var totalAmount = orders.reduce(function (sum, element) {
    console.log(sum);
    console.log(element.amount);
    return sum + element.amount
}, 0);

const myArray = [1, 2, 65, 43];

const sum = array.reduce((sum, num) => sum + num)