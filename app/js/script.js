// Check this file is loaded from HTML
// console.log(`Hi, JS is working`);

// Select DOM node
const inputElm = document.querySelector('.search-input');
console.log({ inputElm });

// Add event listener
inputElm.addEventListener('input', passString);

// Event handler
function passString(event) {
    // Get input string
    let inputStr = event.target.value;
    console.log({ inputStr });

    // Make API call, get data, filter data with input string
    // searchData returns a promise that resolves to a filtered array
    searchData(inputStr)
         // Generate list items with filtered data array 
        .then( (data) => generateListItems(data));
}

function generateListItems(data) {
    const ul = document.querySelector('.results');

    data.map( elm => {
        const li = document.createElement('li');
        li.innerHTML = elm.title;
        ul.appendChild(li);
    });
}
