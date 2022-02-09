function applyCss() {
    $("p").css({ "background-color": "red", "font-size": "50px" });
}
function main() {
    $("p").click(applyCss)
}
$(document).ready(main());