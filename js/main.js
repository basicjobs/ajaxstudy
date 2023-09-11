const pageBtnEls = document.querySelectorAll(".center-num .pagebtn");

pageBtnEls[0].classList.add("clicked");

pageBtnEls.forEach(function (pageBtnEl) {
    pageBtnEl.addEventListener("click", function (event) {
        if (pageBtnEl.classList.contains("clicked")) {
            pageBtnEl.classList.remove("clicked");
        } else {
            pageBtnEls.forEach(function (btn) {
                btn.classList.remove("clicked");
            });
            pageBtnEl.classList.add("clicked");
        }
    });
});
