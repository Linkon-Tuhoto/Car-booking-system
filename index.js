/*window.onload = function() {
    var select = document.getElementaryById("dateSelect");
    var date = new Date();

    for (var i = 0; i < 60; i++){
        var option = document.createElement("option");

        var dateString = date.toISOSstring().split("T")[0];

        option.text = dateString;
        option.value = dateString;
        select.add(option);

        date.setDate(date.getVarDate() -1);
    }
};*/

const swiper = new swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/*
const Swiper = new Swiper(".carSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:false,
    grabCursor: true,
    pagination: {
        el
    }
})*/