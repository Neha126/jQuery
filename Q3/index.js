function applytext() {
    $("textarea").text("Hello World! ");
}
function main() {
    $("textarea").click(applytext)
}
$(document).ready(main());