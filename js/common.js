const itemNameEls = document.querySelectorAll(".item__name");
const itemContentsEls = document.querySelectorAll(".item__contents");

itemNameEls.forEach(function (itemNameEl, index) {
    itemNameEl.addEventListener("click", function (event) {
        // 클릭한 .item__name에 active 클래스 추가
        itemNameEl.classList.add("active");

        // 현재 클릭한 .item__name을 제외한 다른 .item__name에서 active 클래스 제거
        itemNameEls.forEach(function (el, i) {
            if (i !== index) {
                el.classList.remove("active");
            }
        });

        // 현재 보이는 .item__contents 숨기기
        itemContentsEls.forEach(function (itemContentsEl) {
            itemContentsEl.classList.remove("show");
        });

        // 클릭된 .item__contents 보이기
        itemContentsEls[index].classList.add("show");
    });
});
