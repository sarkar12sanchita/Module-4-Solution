(function(window) {
    var goodBye = new Object();
    var firstWord = "GoodBye";
    goodBye.print = function(name) {
        console.log(firstWord + " " + name);
    };
    window.goodBye = goodBye;
})(window);