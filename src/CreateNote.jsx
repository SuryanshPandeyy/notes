import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import "./body.css";



const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);
    const expandIt = () =>{
        setExpand(true);
    }
    const reduceIt = () => {
        setExpand(false);
    }


    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        })
    }

    return (
        <>
            <div className="body">
                <div className="box" onDoubleClick={reduceIt}>
                    <div className="content">
                        <form>
                            {expand ?
                            <input
                                type="text"
                                value={note.title}
                                onChange={InputEvent}
                                name="title"
                                id="text"
                                placeholder="Title"
                                autoComplete="off"
                            /> :null}

                            <textarea
                                name="content"
                                value={note.content}
                                onChange={InputEvent}
                                cols=""
                                rows=""
                                placeholder="Content"
                                autoComplete="off"
                                onClick={expandIt}>
                            </textarea>
                        </form>
                    </div>
                    {expand ?
                    <IconButton className="iconbtn" style={{ background: "purple" }} onClick={addEvent}>
                        <AddIcon className="addbtn" fontSize="large" style={{ color: "white" }} />
                    </IconButton> :null}
                </div>


            </div>
        </>
    )
}
export default CreateNote;