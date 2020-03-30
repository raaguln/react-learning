import React, {useState, useEffect} from "react";

let Note = ({note, removeNote}) => {

    useEffect(() => {
        console.log("Only once after render of an instance of a child component")
        return () => {
            console.log("Cleaning Up!")
        }
    }, [])

    return (
        <div>
            <h3>{ note.title }</h3>
            <p>{ note.body }</p>
            <button onClick={() => removeNote(note.title)}>x</button>
        </div>
    )
}

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
                    <Note key={i} note={note} removeNote={removeNote} />
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