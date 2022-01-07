export function NoteModal({txt, toggleModal}) {
    setTimeout(() => {
      toggleModal();
    }, 2000);
  
    return (
      <section className="note-modal">
        <p>{txt}</p>
        <button onClick={toggleModal}>X</button>
      </section>
    );
  }
  