// Wait for the DOM to fully load before attaching event handlers
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the verses from the JSON file
    fetch('bible_verses.json')
        .then(response => response.json())
        .then(bibleVerses => {
            // Now bibleVerses is an array containing your verses

            // Attach an event listener to the button
            document.getElementById('submitBtn').addEventListener('click', function() {
                displayVerseWithName(bibleVerses);
            });

            // Event listener for the Enter key in the input field
            document.getElementById('nameInput').addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    displayVerseWithName(bibleVerses);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching the bible verses:', error);
        });

    function displayVerseWithName(bibleVerses) {
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
