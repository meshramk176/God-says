var bibleVerses = [
    "Genesis 1:1", "John 3:16", 
    // Add more verses here
];

function displayVerseWithName() {
    var name = document.getElementById('nameInput').value.trim();
    if (name !== "") {
        var randomIndex = Math.floor(Math.random() * bibleVerses.length);
        var verseDisplay = document.getElementById('verseDisplay');
        verseDisplay.innerText = "Hi " + name + ", God says that " + bibleVerses[randomIndex];
        verseDisplay.style.display = "block";
        document.getElementById('nameInputSection').style.display = "none";
    } else {
        alert("Please enter your name.");
    }
}
