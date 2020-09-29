const quotes = [{
    text: 'You are not your code, you are much greater.',
    author: 'Bob React'
}, 
                {   
    text: 'Code to make a better world, not a more complex one.',
    author: 'James Vue'
},
{   
    text: 'Work smarter, not harder.',
    author: 'Jack Script'
},
{   
    text: 'The potential to do great is in you, your job is to find and utilise it.',
    author: 'John Scope'
},
{   
    text: 'Follow your curiosity, for it will always serve you.',
    author: 'Sir Benjamin Angular'
}];


function shuffle(array) {
    let counter = array.length;
    let temp;
    let index;

    if (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    
    return array;
}




// storing our container and text box's
let textBox = document.querySelector('.container-box--text');
let authorBox = document.querySelector('.container-box--cta-text');
const container = document.querySelector('.container-box');

let i;

// our event listener - listening for click on box
container.addEventListener('click', () => {
    

    for (index = 0; index < quotes.length; index++) {
        textBox.innerText = quotes[index].text;
        authorBox.innerText = quotes[index].author;
    }

    shuffle(quotes);
    
})

