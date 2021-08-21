document.querySelector('#generate-names').addEventListener('submit', loadNames);

//Execute the function to query the API
function loadNames(e) {
    e.preventDefault();

    //Read values from the form and create variables
const origin = document.getElementById('country').value;
const genre = document.getElementById('genre').value;
const amount = document.getElementById('quantity').value;

//Read the url
let url = 'https://uinames.com/api/?';

//read the origin and append to the url
if(origin !== ''){
    url += `
       region=${origin}&    
    `;
}

//read the genre and append to the url
if(genre !== ''){
    url += `
       genre=${genre}&    
    `;
}

//read the amount and append to the url
if(amount !== ''){
    url += `
       amount=${amount}&    
    `;
}

//Ajax Call
const xhr = new XMLHttpRequest();

//Open the connection
xhr.open('GET', url, true);

//Execute the function
xhr.onload = function() {
    if (this.status === 200) {
        const names = JSON.parse(this.responseText);
        
        let html = '<h2>Generated Names</h2>';
        html += '<ul class="List">';
        names.forEach(function(name){
            
                html += `
                  <li>${name.name}</li>
                `;
            
            html += '</ul>';  
        });

        document.querySelector('#result').innerHTML = html;
    }
   
}
xhr.send();

}

