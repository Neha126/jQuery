function inputValue() {
    var str = $("#myInput").val;
    $('#para').html(str);
};

function main() {
    $("#myBtn").click(inputValue);
};

$(document).ready(main());

