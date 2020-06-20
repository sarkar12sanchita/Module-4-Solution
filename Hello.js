(function(window) {
    var hello = new Object();
    var speakWord = "Hello";
    hello.print = function(name) {
        console.log(speakWord + " " + name);
    };
    window.hello = hello;
})(window);