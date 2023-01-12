expand = document.querySelector(".join");
expand.onclick = function () {
    ubah = document.querySelector(".join");
    ubah.classList.toggle("active");
    if (expand.classList.contains("active")) {
    document.getElementById("x").innerHTML = "&#10006;";
    }
    else {
        document.getElementById("x").innerHTML = "Join Us!"
    }
    muncul = document.querySelector(".discord");
    muncul.classList.toggle("active");
}