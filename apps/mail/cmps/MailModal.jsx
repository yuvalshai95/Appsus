export function MailModal({txt, toggleModal}) {
  setTimeout(() => {
    toggleModal();
  }, 2000);

  return (
    <section className="mail-modal">
      <p>{txt}</p>
      <button onClick={toggleModal}>X</button>
    </section>
  );
}
