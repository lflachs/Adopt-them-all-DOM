var animals = [
    { name: "John", species: "dog", img: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg' },
    { name: "Caro", species: "rabbit", img: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Oryctolagus_cuniculus_Rcdo.jpg' },
    { name: "Paul", species: "poney", img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Shetland_pony_-_Postbridge.jpg' },
    { name: "Harold", species: "cat", img: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png' },
    { name: "Jimmy", species: "dog", img: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg' }
]



const root = document.getElementById('root');

// Part 1 - Create the function
// You need to create a function renderAnimal that will take an array as a parameter 
// then the function will loop and create for every elements :
//          => a div with a class card, 
//          => a h1 with a class card-title inside of it the name of the pet (using the loop we can access to the proprety)
//          => a div with the class card-img with a backgroundImage of the pet img proprety
//          => a btn with the class card-btn with the text `I want to adopt + name of the pet` 
// all  those elements will be added as a child of the card div that will be aded as a child of the root element 
// Make sure that you're runing the function one time with animals as the parameters



// Part 2 - Selector





const selector = document.getElementById('selector');




// Part 3 - Searchbar 



const animalName = document.getElementById('animal-name');
