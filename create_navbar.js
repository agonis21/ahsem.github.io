let navbar = document.createElement("div");
navbar.classList.add("c-main-navbar");

let links = [
    ["AHSEM", "index.html"],
    // ["APPS", "apps.html"],
    // ["EDITS", "edits.html"],
    ["SHOP", "shop.html"]
];

let current_page_link = window.location.href.split("/").slice(-1)[0];
if (current_page_link == "") {
    current_page_link = "index.html";
}

for (var i = 0; i < links.length; i++) {
    let navbar_item = document.createElement("div");
    navbar_item.classList.add("navbar-item");
    //navbar_item.onclick = "location.href='" + links[i][1] + "';"

    let navbar_a = document.createElement("a");
    navbar_a.innerText = links[i][0];
    navbar_a.href = links[i][1];

    if (current_page_link == links[i][1]) {
        navbar_item.classList.add("navbar-item-selected");

        navbar_item.appendChild(navbar_a);
        navbar.prepend(navbar_item);
    } else {
        navbar_item.appendChild(navbar_a);
        navbar.appendChild(navbar_item);
    }

}


let main_container = document.querySelector(".container-main");
main_container.innerHTML = navbar.outerHTML + main_container.innerHTML;

console.log();