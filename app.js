// Array of users notes
let notes = [];

// Opens note dialog
function openNoteDialog(){
    const dialog = document.getElementById('noteDialog');
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');
    dialog.showModal();
    titleInput.focus();
}

// Closes note dialog
function closeNoteDialog() {
    document.getElementById('noteDialog').close();
}

// Event listener to check that dom content has been loaded before
// creating other event listeners.
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for user clicking off note dialog to close it
    document.getElementById('noteDialog').addEventListener('click', function(event){
        if(event.target === this) {
            closeNoteDialog();
        }
    })

})