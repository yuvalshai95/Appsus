import { NoteEditContent } from "./NoteEditContent.jsx"





export function NoteTxt({dataProps, dataProps: {note}}) {
    
    function onUpdateNoteContent(ev) {
        const { updateNoteContent } = dataProps;
        const value = ev.target.textContent
        updateNoteContent(note.id, note.type, value)   
    }
    return (
        <React.Fragment>
            <div style={{outline:"none"}} className="txt-content" onBlur={onUpdateNoteContent} contentEditable>
                {note.info.txt}
            </div>
       
         </React.Fragment>

    )

}















// export class NoteTxt extends React.Component {

    
//     state = {
//         txt: '',

//     }
    
//     onToggleEdit = (isEdit) => {
//         this.setState({ isEdit });
//     }

//     onUpdateNote = ({target}) => {
//         console.log('target:', target.textContent);
        
        
        
//     }
    
//     render() {
//         const { removeNote, changeBgColor, note } = this.props.dataProps;
        

//         return (
//             <React.Fragment>
//                 <div>
                   
//                     <div onBlur={this.onUpdateNote} contentEditable>
//                         {note.info.txt}
//                     </div>

            
                   
//                 </div>   
//                 </React.Fragment>


// )
                


//     }




// }