/*document.addEventListener("DOMContentLoaded", function (ev) {
    var container_main = document.querySelector(".container-main");
    var container_apps = document.querySelectorAll(".container-app");
    var c_main_container = document.querySelector(".c-main-container");

    *//*console.log(container_apps);

    for (var i = 0; i < container_apps.length; i++) {
        container_apps[i].style.opacity = "0";

    }*//*

    //c_main_container.style.opacity = "0";

    var saved_container = c_main_container.innerHTML;

    c_main_container.innerHTML = createPasswordContainer(c_main_container, saved_container);

});

function createPasswordContainer(c__main_container, saved_container) {
    var c_main_container = document.createElement("div");
    c_main_container.classList.add("c-main-container");

    var pass_div = document.createElement("div");
    pass_div.classList.add("container-block");

    var pass_label = document.createElement("h1");
    pass_label.innerText = "Password";

    var pass_input = document.createElement("input");
    pass_input.type = "text";

    var pass_submit = document.createElement("input");
    pass_submit.type = "submit";

    pass_submit.addEventListener("click", function () {
        console.log("asfd");
        c__main_container.innerHTML = saved_container;        
    }, false);

    pass_div.appendChild(pass_label);
    pass_div.appendChild(pass_input);
    pass_div.appendChild(pass_submit);


    c_main_container.appendChild(pass_div);

    return c_main_container.innerHTML;
}*/