
export function NoteVideo({dataProps}) {
    
    const { note } = dataProps;
    
    return (
        <section className="note-video" contentEditable>
            <iframe width="250" height="200"
                src={`//www.youtube.com/embed/${note.info.urlId}`} frameBorder="0"
                allow="autoplay"></iframe>
           
        </section>
    )

}