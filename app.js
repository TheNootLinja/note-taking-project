// Array of users notes
let notes = [];
renderNotes();

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
    document.getElementById('noteForm').reset();
}

// Submits note
function saveNote(event) {
    event.preventDefault();
    // Get title and content from form
    const title = document.getElementById('noteTitle').value.trim();
    const content = document.getElementById('noteContent').value.trim();
    // Add users note to the beginning of the notes array
    notes.unshift({
        id: generateId(),
        title: title,
        content: content
    })

    saveNotes();
    closeNoteDialog();
    renderNotes();
}

// Generates ID from turning date to string
function generateId() {
    return Date.now().toString();
}

// Save the note array to local storage
function saveNotes() {
    localStorage.setItem('notesArr', JSON.stringify(notes))
}

function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');

    if(notes.length === 0) {
        notesContainer.innerHTML = `
            <div class ="empty-state">
                <h2>No notes yet</h2>
                <p>Create your first note to get started!</p>
                <button class="add-note-btn" onclick="openNoteDialog()">+ Add Your First Note</button>
            </div>
        `
        return
    }
    
    notesContainer.innerHTML = notes.map(note => `
        <div>
            <h3 class="note-title">${note.title}</h3>
            <p class="note-content">${note.content}</p>
        </div>
        `).join('')
}

// Event listener to check that dom content has been loaded before
// creating other event listeners.
document.addEventListener('DOMContentLoaded', function() {

    // Event listener for submitting note form
    document.getElementById('noteForm').addEventListener('submit', saveNote)

    // Event listener for user clicking off note dialog to close it
    document.getElementById('noteDialog').addEventListener('click', function(event){
        if(event.target === this) {
            closeNoteDialog();
        }
    })

})