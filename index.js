var animals = [
    { name: "John", species: "dog", img: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg', age: 3 },
    { name: "Caro", species: "rabbit", img: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Oryctolagus_cuniculus_Rcdo.jpg', age: 6 },
    { name: "Paul", species: "poney", img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Shetland_pony_-_Postbridge.jpg', age: 8 },
    { name: "Harold", species: "cat", img: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', age: 10 },
    { name: "Jimmy", species: "dog", img: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', age: 12 }
]

const root = document.getElementById('root');

// Return oldest Animal object:
const oldestAnimal = animals.reduce((biggest, animals) => biggest.age < animals.age ? animals : biggest)

// We create the class Card with the generate card method

class Card {
    constructor(title, img) {
        this.title = title;
        this.img = img;
    }
    generateCard() {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardTitle = document.createElement('h1');
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = this.title;

        let cardImage = document.createElement('div');
        cardImage.style.backgroundImage = `url(${this.img}`;
        cardImage.classList.add("card-img");

        let button = document.createElement('button');
        button.xinnerHTML = `I want to adopt ${this.title}`
        button.classList.add("card-btn");


        card.appendChild(cardTitle);
        card.appendChild(cardImage);
        card.appendChild(button);
        root.appendChild(card);

    }
}

function renderAnimal(array) {
    root.innerHTML = "";
    for (const element of array) {
        const card = new Card(element.name, element.img);
        card.generateCard();
    }
}

// We run the function once with the full array 
renderAnimal(animals);


// We create the selector variable
const selector = document.getElementById('selector');

// We listen for any change, we give the event as a parameter of the function 
// to be able to access the event informations 
// then we create a new array with only the element that have the same value 
// as the new selector value 
// and we run the render function with the new array 
selector.addEventListener('change', (event) => {
    let newArray = animals.filter(element => element.species === event.target.value);
    renderAnimal(newArray);
})

// Same thing with the input
const animalName = document.getElementById('animal-name');
animalName.addEventListener('input', (event) => {
    let newArray = animals.filter(element => selector.value === "" ? element.name.includes(event.target.value) : selector.value && element.name.includes(event.target.value));
    if (event.target.value === "") {
        selector.value = "";
    }
    renderAnimal(newArray);
})