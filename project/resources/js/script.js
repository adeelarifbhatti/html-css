ids = ['5span-1','5span-2','5span-3','5span-4','5span-5'];

document.getElementById("myBtn1").addEventListener("click", function() {
   var test2 = document.getElementById("5span-1");
    test2.style.backgroundColor= "red";
    var value = Math.floor(Math.random() * 6) + 1;
    test2.textContent=value;

  });

  document.getElementById("myBtn2").addEventListener("click", function() {
    var test2 = document.getElementById("5span-2");
     test2.style.backgroundColor= "yellow";
     var value = Math.floor(Math.random() * 6) + 1;
     test2.textContent=value;
   });
   document.getElementById("myBtn3").addEventListener("click", function() {
    var test2 = document.getElementById("5span-3");
     test2.style.backgroundColor= "blue";
     var value = Math.floor(Math.random() * 6) + 1;
     test2.textContent=value;
   });
   document.getElementById("myBtn4").addEventListener("click", function() {
    var test2 = document.getElementById("5span-4");
     test2.style.backgroundColor= "orange";
     var value = Math.floor(Math.random() * 6) + 1;
     test2.textContent=value;
   });
   document.getElementById("myBtn5").addEventListener("click", function() {
    var test2 = document.getElementById("5span-5");
     test2.style.backgroundColor= "Grey";
     var value = Math.floor(Math.random() * 6) + 1;
     test2.textContent=value;
   });

   document.getElementById("myBtn0").addEventListener("click", function () {
       
    for (var i = 0; i < ids.length; i++) {
        var test2 = document.getElementById(ids[i]);
        test2.style.backgroundColor= "black";
      var value = Math.floor(Math.random() * 6) + 1;
      test2.textContent=value;
    }
   });

