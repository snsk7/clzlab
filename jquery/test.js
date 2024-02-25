let a = {
    fname: "sisir",
    mname: "narayan",
    lname: "chhetri",
    print : function (){
        for(let x in a){
            console.log(a);
        }
    }
};

$(document).ready(function(){
    $("#s").text(a);
});

