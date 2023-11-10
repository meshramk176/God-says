document.addEventListener("DOMContentLoaded", function() {
    var bibleVerses = [
        "Genesis 1:1", "John 3:16", 
        // Add more verses here
    ];

    function displayRandomVerse() {
        var randomIndex = Math.floor(Math.random() * bibleVerses.length);
        document.getElementById('verseDisplay').innerText = bibleVerses[randomIndex];
    }

    displayRandomVerse();
});
