import React, {useState} from "react";

let Notes = () => {
    let [myNotes, setNote] = useState([])
    let [title, setTitle] = useState("")
    let [body, setBody] = useState("")

    let addNote = (e) => {
        e.preventDefault()
        setNote([
            ...myNotes,
            { 
                title,
                body
            }
        ])
        setTitle("")
        setBody("")
    }

    let removeNote = (title) => {
        setNote(myNotes.filter((note) => ( note.title != title )))
    }

    return (
        <div>
            <h1>Notes App</h1>
            {
                myNotes.map((note, i) => (
                    <div key={i}>
                        <h3>{ note.title }</h3>
                        <p>{ note.body }</p>
                        <button onClick={() => removeNote(note.title)}>x</button>
                    </div>
                ))
            }
            <form onSubmit={addNote}>
                <input
                    placeholder={"title"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder={"body"}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default Notes;