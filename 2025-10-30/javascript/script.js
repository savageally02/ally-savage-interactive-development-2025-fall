/* console.log("test");
setTimeout(function(){
    $("body").css("background-color","red");
}, 2000); */
/* $("#btn").on("click", function(){
    setTimeout(function(){
        $("body").css("background-color","red");
    }, 3000);
}); */
/* console.log($("#div1").width());
console.log($("#div1").outerWidth());
console.log($("#div2").width());
console.log($("#div2").outerWidth());
/* $("#div1").width(600); */
/* $("#div1").css({"width": 600}); */

/* let div1CssWidth=$("#div1").css("width");
console.log(div1CssWidth); 

let div1outerWidth = $("#div1").outerWidth();
console.log(div1outerWidth); 

let div1Width = $("#div1").width();
console.log(div1Width); 
 */

$("#div1").css({"width":"700px"})

$("#div1copy").on("click", function(){
    $("#div1").width("1000%");
    let div1width = $("#div1").width();
    console.log(div1width);
    $(this).css({"width":"1000%", "background-color": "yellow"});
    let thiswidth = $(this).css("width");
    console.log(thiswidth);
})
