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

$(document).ready(function() { 
    $('#aside h3').on('click', function() {
		$('aside h3').css({ 'color': 'black', 'background-color': 'white' });
        $(this).css({ 'color': 'white', 'background-color': '#252782' });
    });
}); 

$("#search").keyup(function() {
        var value = this.value.toLowerCase().trim();
    
        $("#history tr").each(function (index) {
            if (!index) return;
            $(this).find("td").each(function () {
                var id = $(this).text().toLowerCase().trim();
                var not_found = (id.indexOf(value) == -1);
                $(this).closest('tr').toggle(!not_found);
                return not_found;
            });
        });
    });