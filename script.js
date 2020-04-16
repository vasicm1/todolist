

    function rmButton(){
        const deleteButton = document.getElementById("delbtn1");
        console.log(deleteButton)
        const checkButton = document.getElementById("c1");
        console.log(checkButton)
        if (checkButton.checked){
            deleteButton.style.display="none";
        }
        else{
            deleteButton.style.display="block";
        }
    }