function useFadeProperty() {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
};
function main() {
    $("button").click(useFadeProperty);
};

$(document).ready(main());


