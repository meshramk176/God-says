var bibleVerses = [
    " For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future. -Jeremiah 29:11", 
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
