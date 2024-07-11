function createTaskHTML(task_created_date, task_title, task_priority, task_status) {
/*    <div class="row">
        <div class="col">
            <p>Created</p>
        </div>
        <div class="col-4">
            <p>Title</p>
        </div>
        <div class="col">
            <p>Priority</p>
        </div>
        <div class="col">
            <p>Status</p>
        </div>
        <div class="col">
            <p>Delete</p>
        </div>
        <div class="col">
            <p>Submit</p>
        </div>
    </div>*/

    console.log("Function called");

    const t_inputs = [task_created_date, task_title, task_priority, task_status];
    console.log(t_inputs);

    let t_row = document.createElement("div");
    t_row.classList.add('row');

    console.log(t_row);

    for (let i = 0; i < t_inputs.length; i++) {
        /*const paragraph = document.createElement("p");
        const text_node = document.createTextNode(t_inputs[i]);
        paragraph.appendChild(text_node);*/

        let btn = document.createElement("button");
        btn.type = "button";
        btn.innerText = t_inputs[i];
        btn.classList.add('btn');
        btn.classList.add('btn-light');
        btn.setAttribute("disabled", true);

        const t_col = document.createElement("div");
        if (i == 1) {
            //if it is title
            t_col.classList.add('col-4');
        } else {
            t_col.classList.add('col');
        }
        console.log(t_col);

        t_col.appendChild(btn);

        t_row.appendChild(t_col);
    }

    //creating and appending delete button
    const t_col = document.createElement("div");
    t_col.classList.add('col');
    let delete_btn = document.createElement("button");
    delete_btn.type = "button";
    delete_btn.innerText = "Delete";
    delete_btn.classList.add('btn');
    delete_btn.classList.add('btn-danger');
    t_col.appendChild(delete_btn);
    t_row.appendChild(t_col);

    delete_btn.addEventListener("click", function () {
        let deleted_task_section = document.getElementById("deleted_tasks");
        complete_btn.disabled = true;
        delete_btn.disabled = true;

        //changing task status
        t_row.childNodes[3].querySelector("button").innerText = "Deleted";

        deleted_task_section.appendChild(t_row);
        console.log(deleted_task_section);
        //t_row.remove();

        DELETED_TASKS.push(t_inputs);
    });


    //creating and appending submit button
    const t_col_2 = document.createElement("div");
    t_col_2.classList.add('col');
    let complete_btn = document.createElement("button");
    complete_btn.type = "button";
    complete_btn.innerText = "Done";
    complete_btn.classList.add('btn');
    complete_btn.classList.add('btn-success');
    t_col_2.appendChild(complete_btn);
    t_row.appendChild(t_col_2);
    complete_btn.addEventListener("click", function () {
        let completed_task_section = document.getElementById("completed_tasks");

        complete_btn.disabled = true;
        delete_btn.disabled = true;

        //changing task status
        t_row.childNodes[3].querySelector("button").innerText = "Completed";

        completed_task_section.appendChild(t_row);
        console.log(completed_task_section);
        //t_row.remove();

        COMPLETED_TASKS.push(t_inputs)

    });


    let tasks_table = document.getElementById("current_tasks");
    tasks_table.appendChild(t_row);



}

let TASKS = [
    ["10-12", "Click done.", "MED", "Current"],
    ["10-12", "Click delete.", "LOW", "Current"],
    ["10-12", "Complete Project 02 for CUS1172.", "HIGH", "Current"]

];

let COMPLETED_TASKS = [
];

let DELETED_TASKS = [

];


document.addEventListener("DOMContentLoaded", function (event) {
    //prevent page from refreshing
    var form = document.getElementById("task_form");
    function handleForm(event) {
        event.preventDefault();
    }
    form.addEventListener('submit', handleForm);


    for (let k = 0; k < TASKS.length; k++) {
        createTaskHTML(...TASKS[k]);
    }



    let new_task_submit_btn = document.querySelector("#new_task_submit");
    new_task_submit_btn.onclick = function () {
        let task_created_date = (new Date().getMonth() + 1) + "-" + (new Date().getDate());

        let task_title_element = document.querySelector("#new_task_input");
        let task_title = task_title_element.value;
        task_title_element.value = "";

        let task_priority_element = document.querySelector("#new_task_priority");
        let task_priority = task_priority_element.value;

        let task_list_item = [task_created_date, task_title, task_priority, "Current"];
        TASKS.push(task_list_item);
        createTaskHTML(...task_list_item);
    }

});