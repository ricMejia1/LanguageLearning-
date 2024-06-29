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

    // Add new love note functionality
    const newNoteButton = document.getElementById('newNoteButton');
    const notesContainer = document.getElementById('notesContainer');

    newNoteButton.addEventListener('click', function() {
        const noteText = prompt('Enter your love note:');
        if (noteText) {
            const noteDiv = document.createElement('div');
            noteDiv.className = 'note';
            noteDiv.textContent = noteText;
            notesContainer.appendChild(noteDiv);
        }
    });
});
