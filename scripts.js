document.addEventListener('DOMContentLoaded', function() {
    // Example timeline entries
    const timelineEntries = [
        'First date: [Date]',
        'Anniversary: [Date]',
        'Favorite vacation: [Date]'
    ];

    // Populate the timeline
    const timelineList = document.getElementById('timelineList');
    timelineEntries.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = entry;
        timelineList.appendChild(listItem);
    });

    // Load love notes from localStorage
    const notesContainer = document.getElementById('notesContainer');
    const savedNotes = JSON.parse(localStorage.getItem('loveNotes')) || [];
    savedNotes.forEach(note => {
        addNoteToDOM(note);
    });

    // Add new love note functionality
    const newNoteButton = document.getElementById('newNoteButton');
    newNoteButton.addEventListener('click', function() {
        const noteText = prompt('Enter your love note:');
        if (noteText) {
            // Save the new note
            savedNotes.push(noteText);
            localStorage.setItem('loveNotes', JSON.stringify(savedNotes));
            addNoteToDOM(noteText);
        }
    });

    // Function to add a note to the DOM
    function addNoteToDOM(noteText) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = noteText;
        notesContainer.appendChild(noteDiv);
    }
});
