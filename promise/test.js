function myResolve(value) {
    document.getElementById("d").innerHTML = value;
}

function myReject(value) {
    document.getElementById("d").innerHTML = value;
}

function loadoc() {
    let myPromise = new Promise(function () {
        let req = new XMLHttpRequest();
        req.open("get", "test.xml");
        req.onload = function () {
            if (req.status == 200) {
                myResolve("works");
            } else {
                myReject("this doesnt works maybe absence of file");
            }
        };
        req.send();
    });
}

