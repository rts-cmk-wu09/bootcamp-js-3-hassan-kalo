const main = document.getElementById('main');
const params = new URLSearchParams(window.location.search);
const paramValue = params.get("page");

//If there is a paramValue. if(paramValue != null).
if (paramValue) {
  const file = `${paramValue}.html`;
  fetch(file)
    .then(response => {
        console.log(response)
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${file}. Error: ${response.statusText}`);
      } else {return response.text();} 
      
    })
    .then(content => {
      if (!content) {
        main.innerHTML = `Error: '${paramValue}' is empty.`;
        return;
      }
      main.innerHTML = content;
    })
    .catch(error => {
      console.error(error);
      main.innerHTML = `Error: Failed to load content. Error: ${error.message}`;
    });
}

// Another way of doing the same 

/* const main = document.getElementById('main');
const params = new URLSearchParams(window.location.search);
const paramValue = params.get("page");

if (paramValue) {
const file = ${paramValue}.html;
try {
const response = await fetch(file);
if (!response.ok) {
throw new Error(Failed to fetch file: ${file}. Error: ${response.statusText});
}
const content = await response.text();
// if no (!) content
if (!content) {
main.innerHTML = `Error: ${paramValue} is empty.`;
return;
}
main.innerHTML = content;
} catch (error) {
console.error(error);
main.innerHTML = `Error: Failed to load content. Error: ${error.message}`;
}
} */