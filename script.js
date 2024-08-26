const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Bhai Pehle Kuch Likhle!");
    }
    else {
        //create a variable li
        let li = document.createElement("li");
        // inputBox value will be store in new li Varible.
        li.innerHTML = inputBox.value;
        //li value is append or kept in listContainer that we make
        listContainer.appendChild(li);

        // now we embeded a cross (x) which later help us to delete our tasks 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//this u00d7 is sign of X 
        li.appendChild(span);

    }
    inputBox.value = '';
    savedData();
}

// Now we will make a function to delete these task

listContainer.addEventListener('click', function (e) {
    // if user click to complete the task of list then it will be checked
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        savedData();
    }

    //if user click to 'x' this sign then remove the task from the list
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedData();
    }
}, false);


// now when ever we refresh our page the whole task get restarted and whole tasks got removed automatically so we should have to change this to store all task in  a manner so if completely close our app and restart it we found same task that we forget it before.
// this data will be saved in a local server
function savedData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// now we have to display our data when open our application again

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();