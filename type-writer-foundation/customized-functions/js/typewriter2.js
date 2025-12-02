let String1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu felis dignissim, porttitor est eget, dictum mauris. Pellentesque a arcu eget dui tincidunt maximus eget sit amet eros. Sed non ligula ornare, sodales dolor in, condimentum nulla. In rhoncus varius lorem, quis vestibulum lectus imperdiet luctus. Fusce semper, quam id fringilla rutrum, leo ex ultrices eros, sed viverra ipsum mauris et urna. Maecenas eget laoreet turpis, a egestas massa. LinkMark<a href= "https://www.google.com/search?q=cafe+de+olla&oq=&gs_lcrp=EgZjaHJvbWUqCQgCEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQ4xMjcwOTc2Mzc2ajBqN6gCCLACAfEFSuLFffgRzaE&sourceid=chrome&ie=UTF-8">Pellentesque</a>LinkMark habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam at lorem tempus, mollis nisi nec, pretium odio. Aliquam at dui eget nisl suscipit maximus a condimentum enim. Integer id tellus diam. Aenean commodo placerat eros elementum vehicula. Quisque fringilla, lacus sed venenatis ultrices, turpis nulla iaculis sapien, vel malesuada lectus purus vel sapienn.';


let MyStringArray = MyString.split("LinkMark");
console.log(MyStringArray);

MyStringArray.forEach(function(individualString, MyStringIndex) {
      console.log(individualString);
        if(individualString.startsWith("a ") && individualString.endsWith("/a>")){
                console.log(individualString);
                let separators = ['</a>', "<a ", 'href=" ', '"', '>'];
                let AElement = individualString;
                console.log(AElement);
                separators.forEach(function(separator, index){
                    console.log(AElement);
                    AElement = AElement.replace(separator, "/Separator/");
                    console.log(AElement);
                });

                let AElementArray = AElement.split("/Separator/");
                console.log(AElementArray);
                AElementArray = AElementArray.filter(function(el) {
                    return el != "";
                });
                console.log(AElementArray);
                MyStringArray(AElementArr
});

/* let string1TotalCharacterNumber = String1.length;
let string1iterationIndx = 0;

let string1Interval = setInterval(function()
{
 $("#typewriting-target").append(String1.charAt(string1iterationIndex));
 string1iterationIndex = string1iterationIndex + 1;
 console.log("1 iteration completed");
 if (string1iterationIndex ==
  string1TotalCharacterNumber){
    clearInterval(string1Interval);
  }
 }, 10);


 $("body").append(MyString2);
  */