

export function NoteImg({dataProps}) {
    const { note } = dataProps;
    return (
        <section className="note-img">
            <img  src={note.info.url} alt="" />

        </section>
    )

}