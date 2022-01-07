import {HeaderMenu} from './HeaderMenu.jsx';
const {NavLink} = ReactRouterDOM;

export class Header extends React.Component {
  state = {
    isVisible: false,
    isOnKeep: false,
  };

  // state = {
  //     isVisible: false,
  //     isOnKeep: false,
  // }

  onKeep = isOnKeep => {
    this.setState({isOnKeep});
  };

  onToggleMenu = () => {
    const {isVisible} = this.state;
    this.setState({isVisible: !isVisible});
  };

  render() {
    const {isVisible, isOnKeep} = this.state;

    return (
      <div className="header-container">
        <header className="header main-layout">
          <div className="logo-container">
            <NavLink exact to="/">
              <span onClick={() => this.onKeep(false)} className="logo-txt">
                Appsus
              </span>
              {isOnKeep && (
                <div className="keep-logo">
                  <img src="./assets/img/keep.png" alt="" />
                </div>
              )}
            </NavLink>
          </div>

          {!isVisible && <i onClick={this.onToggleMenu} className="fas fa-th-large"></i>}

          {isVisible && <HeaderMenu onToggleMenu={this.onToggleMenu} onKeep={this.onKeep} />}
        </header>
      </div>
    );
  }
}
