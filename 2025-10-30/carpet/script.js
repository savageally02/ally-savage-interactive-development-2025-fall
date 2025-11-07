
let DivCount = 1;
setInterval(function(){
    $("body").append('<div id="div' + DivCount + '"></div>' );
    let blueValue = 205 + Math.floor(Math.random() * 51);
    let greenValue = 0 + Math.floor(Math.random() * 160);
    let redValue = 0 + Math.floor(Math.random() * 160);

    $("#div" + DivCount).css({"background-color": "rgb("+ redValue +"," +greenValue + "," + blueValue + ")", "width": "100%", "height": "1px"});
    
    DivCount++;
    
}, 50)