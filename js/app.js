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

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash){

    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}