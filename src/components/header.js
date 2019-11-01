import React from 'react';
import { Link } from 'gatsby';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.readerViewRef = React.createRef();
  }

  // componentDidMount() {
  //   const readerView = this.readerViewRef.current;
  //   const container = document.getElementsByClassName('container')[0];

  //   // if(!this.state.isReaderView) {
  //   //   document.body.style.backgroundColor = '#cccccc';
  //   //   container.style.padding = '18px 48px';
  //   //   container.style.boxShadow = '1px 2px 4px rgba(0, 0, 0, 0.5)';
  //   // } else {
  //   //   document.body.style.backgroundColor = '#eeeeee';
  //   //   container.style.padding = '0 10px';
  //   //   container.style.boxShadow = 'none';
  //   // }

  //   readerView.addEventListener('click', () => {
  //     if(!this.state.isReaderView) {
  //       document.body.style.backgroundColor = '#cccccc';
  //       container.style.padding = '18px 48px';
  //       container.style.boxShadow = '1px 2px 4px rgba(0, 0, 0, 0.5)';
  //     } else {
  //       document.body.style.backgroundColor = '#eeeeee';
  //       container.style.padding = '0 10px';
  //       container.style.boxShadow = 'none';
  //     }

  //     this.setState({ isReaderView: !this.state.isReaderView});
  //   });
  // }

  blendModes = ['darken', 'lighten', 'exclusion', 'unset'];
  circleColor = ['red', 'lime', 'blue', 'yellow'];
  blendModeCounter = 0;

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
        <span style={{fontSize: 48, margin: 12, cursor: 'pointer'}} onClick={this.handleClick}>🔴</span>
      </header>
    );
  }
}

export default Header;
