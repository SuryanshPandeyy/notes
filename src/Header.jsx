import React from 'react';
import "./header.css";
import NoteIcon from '@material-ui/icons/Note';

const Header = () => {
    return(
        <>
        <div className="header">
            <span><NoteIcon className="NoteIcon"/><span>Notes</span></span>
        </div>
        </>
    )
}
export default Header;