import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: false,
    };
    this.readerViewRef = React.createRef();
  }

  blendModes = ['darken', 'lighten', 'exclusion', 'unset'];
  blendModeCounter = 0;

  componentDidMount() {
    if (document.getElementsByClassName('three-canvas')[0]) {
      this.setState({
        isHome: true,
      });
    }
  }

  handleClick = () => {
    const canvas = document.getElementsByClassName('three-canvas')[0];

    canvas.style.mixBlendMode = this.blendModes[this.blendModeCounter];

    if(this.blendModeCounter === this.blendModes.length - 1) {
      this.blendModeCounter = 0;

    } else {
      this.blendModeCounter++;
    }
  }


  render() {
    return (
      <header>
        <Link className="header__link header__link--home" to="/"><span role="img" aria-label="Stack of Books Emoji">📚</span></Link>
        <Link to="/" className="header__link header__link--url">selfhelpbooks.club</Link>
        { this.state.isHome &&
          <span className="circle" onClick={this.handleClick}>Click me</span>
        }
      </header>
    );
  }
}

export default Header;
