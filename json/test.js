$(document).ready(function () {
    $("button:nth-child(1)").click(function () {
        fetch("test.json")
        .then(response => response.json())
        .then(value => {
            $("p").text(value.info.skills[1]);
        });
    });
});