function showParagraph() {
    $("p").show();
};
function hideParagraph() {
    $("p").hide();
};

function main() {
    $("#hide").click(hideParagraph);
    $("#show").click(showParagraph);
};

$(document).ready(main);


