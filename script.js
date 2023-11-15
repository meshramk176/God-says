// Wait for the DOM to fully load before attaching event handlers
document.addEventListener('DOMContentLoaded', function () {
    var bibleVerses = [
        "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future. -Jeremiah 29:11",
        // Add more verses here
    ];

    // Attach an event listener to the button
    document.getElementById('submitBtn').addEventListener('click', displayVerseWithName);

    // Event listener for the Enter key in the input field
    document.getElementById('nameInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            displayVerseWithName();
        }
    });

    function displayVerseWithName() {
        var name = document.getElementById('nameInput').value.trim();
        if (name !== "") {
            var randomIndex = Math.floor(Math.random() * bibleVerses.length);
            var verseDisplay = document.getElementById('verseDisplay');
            var followUpQuestions = document.getElementById('followUpQuestions');
            verseDisplay.innerText = "Hi " + name + ", God says that " + bibleVerses[randomIndex];
            verseDisplay.style.display = "block";
            setTimeout(function () { // Wait for the verse to fade in
                verseDisplay.style.opacity = 1;
                followUpQuestions.style.display = "block"; // Show the follow-up section
            }, 2000); // Adjust time as needed
            document.getElementById('nameInputSection').style.display = "none";
        } else {
            alert("Please enter your name.");
        }
    }
});
