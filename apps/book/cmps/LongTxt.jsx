export function LongTxt({text, isLongTxtShown}) {
  function showTxt(text, isLongTxtShown) {
    if (isLongTxtShown) return `About: ${text}`;
    else return `About: ${text.slice(0, 100)}...`;
  }

  return (
    <section>
      <span>{showTxt(text, isLongTxtShown)}</span>
    </section>
  );
}
