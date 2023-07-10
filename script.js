function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".container").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".container").style.backgroundColor = "rgb(250, 250, 250)";
}

function openDrop() {
    var dropdown = document.getElementsByClassName("sidebar-links");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "flex") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "flex";
            }
        });
    }
}