$(function() {
    $("#datepicker").datepicker();
});

$(window).scroll(function() {
    if (this.scrollY > 50) {
        $(".navbar").addClass("sticky")
    } else {
        $(".navbar").removeClass("sticky")
    }
});