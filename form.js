function setInputField(event){
    var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/; 
    var contain = /^[-_+]*$/; 
    let inputFields = document.querySelectorAll("input");
    for(let i=0; i<inputFields.length; i++){
        if(inputFields[i].value.length == "" || inputFields[i].value.length == null){
                    return alert("Input Box can not be empty!");
        }else
        if(inputFields[i].value.length <= 5){
            event.preventDefault();
            return alert("length should not be less than 5!");
        }else
        if(inputFields[i].value.match(format)){
            event.preventDefault();
            return alert("No special Characters are allowed");
        }else
        if(inputFields[i].value.match(contain)){
            event.preventDefault();
            return alert("Cannot start with '-', '_', '+'");
        }
    }
}
