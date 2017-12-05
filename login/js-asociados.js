function myFunction(x) {
    x.classList.toggle("change");
}

$(".rotate").click(function(){
 $(this).toggleClass("down")  ; 
})

$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(s){
    s.stopPropagation();
})

$(".submenu").click(function(){
    $(".icon-arrow").toggleClass("active");
})