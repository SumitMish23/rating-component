const buttons = document.getElementsByClassName("rating");
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    document.getElementsByClassName("container")[0].style.display = "none";
    document.getElementsByClassName("thank-you-content")[0].style.display = "flex";
});

Array.from(buttons).map((val, index) => {
    val.addEventListener("click", () => {
        document.getElementsByClassName("selectedBar")[0].innerText =
            "You selected " + val.innerText + " out of 5";
    });
});
