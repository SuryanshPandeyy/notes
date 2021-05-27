import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import "./body.css";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    return (
        <>
            <div className="show">
                <div className="box_show">
                    <div className="box_title">
                        <span>{props.title}</span>
                    </div>
                    <div className="box_content">
                        <span>{props.content}</span>
                    </div>
                    <IconButton className="iconbtn" onClick={deleteNote} style={{ margin: "1rem 0", background: "purple" }}>
                        <DeleteOutlinedIcon fontSize="large" style={{ color: "white"}}/>
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default Note;