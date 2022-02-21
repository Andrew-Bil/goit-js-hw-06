const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", unFocusHandler);


function unFocusHandler(event) { 

    function removeClasses (){
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.remove("valid");
    }

    if (event.currentTarget.value.length.toString() === inputRef.dataset.length) {
        removeClasses ();
        event.currentTarget.classList.add("valid");    
    }

    else if(event.currentTarget.value.length === 0){

        removeClasses ();
        
    }

    else {
        removeClasses ();
        event.currentTarget.classList.add("invalid");
    }
        
}