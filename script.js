(function() {
    var names = ["sonu", "John", "Monika", "Jezzy", "Paul", "Abhishek", "Jack", "lovely", "Sanchita", "Smita", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            goodBye.print(names[i]);
        } else {
            hello.print(names[i]);
        }
    }
})();