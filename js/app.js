// CODE EXPLAINED channel
const input = document.getElementById("input");

let LIST = [];
let id = 0;
LIST = [{}, {}];

LIST[0] = {
    name: "Drink Coffee",
    id: 0,
    done: false,
    trash: false
}

LIST[0] = {
    name: "Workout",
    id: 1,
    done: true,
    trash: false
}

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });



            id++;
        }
        input.value = "";
    }
});