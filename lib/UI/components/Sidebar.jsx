import React from "react"
import 'react-mde/lib/styles/css/react-mde-all.css';
import { useSelector, useDispatch } from 'react-redux';
import { useSession,getSession, signOut } from "next-auth/react";
export default function Sidebar(props) {
    // Get the notes and currentNoteId from the Redux store
    const notes = useSelector(state => state.notes);
    const currentNoteId = useSelector(state => state.currentNoteId);
    // Get the dispatch function from the Redux store
    const dispatch = useDispatch();
    // Find the current note
    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0];
    // rendering note elements
    const noteElements = props.notes?.map((note, index) => (

        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => dispatch({ type: 'SET_CURRENT_NOTE_ID', currentNoteId: note.id })}
            >
                <h4 className="text-snippet">{note?.noteContent.split("\n")[0]}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3 className="font-bold" >Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div >
            {noteElements}
            <button className="bg-custom-color hover:bg-red-800 text-white px-2 py-2 rounded-full absolute bottom-12 right-0 sm:bottom-1 sm:right-2 " onClick={()=>signOut()}> 
                sign out
            </button>
        </section>
    )
}






