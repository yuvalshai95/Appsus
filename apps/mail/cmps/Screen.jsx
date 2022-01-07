export function Screen({isNavToggled, toggleNav}) {
  return (
    <div
      onClick={() => {
        toggleNav(false);
      }}
      className={`screen ${isNavToggled ? 'screen-active' : ''}`}></div>
  );
}
