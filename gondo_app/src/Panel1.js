import SaveMyNoteBttn from './SaveMyNoteBttn';
import Active_Header from './Active_header';
import Note_Box from './NoteBox';
import SettingsBtn from './Settings_btn';
import SeeMyNotbookBttn from './SeeMyNotebookBttn';
import {Link } from 'react-router-dom';
import './Panel1.css';

function Box() {
  return (
    <div className="Panel1 ">
       <h1 className = "Header">What are we up to?</h1> 
      
       <Active_Header/>
       <Link to="/settings">
        <SettingsBtn/>
       </Link>
       <Note_Box/>
       <SaveMyNoteBttn/>
       <SeeMyNotbookBttn/>

    </div>
  );
}

export default Box;