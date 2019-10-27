import React, { Component, createContext } from 'react';

export const AppContext = createContext({});

class AppProvider extends Component {
  state = {
    cursorCenterDeltaX: 0, // 0 at center, -0.5/0.5 at edges
    cursorCenterDeltaY: 0, // 0 at center, -0.5/0.5 at edges
    cursorPositionX: 0,
    cursorPositionY: 0,
    windowWidth: 0,
    windowHeight: 0,
  };

  //
  // React lifecycle

  componentDidMount() {

    setTimeout(() => {
      this.updateWindowDimensions();
    });

    document.removeEventListener('mousemove', this.updateCursorPosition, false);
    document.addEventListener('mousemove', this.updateCursorPosition, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.updateCursorPosition, false);
  }

  //

  getWindowDimensions() {
    let height = 0;
    let width = 0;

    if (window.innerHeight || document.documentElement || document.body) {
      height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    }

    if (window.innerWidth || document.documentElement || document.body) {
      width = window.innerWidth || document.documentElement || document.body;
    }

    return {
      width,
      height
    };
  }

  updateCursorPosition = event => {
    this.setState(prevState => ({
      cursorCenterDeltaX: -(0.5 - event.pageX / prevState.windowWidth),
      cursorPositionX: event.pageX,
      cursorCenterDeltaY: -(
        0.5 -
        (event.pageY - window.pageYOffset) / prevState.windowHeight
      ),
      cursorPositionY: event.pageY - window.pageYOffset
    }));
  };

  //
  // render/wrapper

  render() {

    return (
      <AppContext.Provider
        value={{
          cursorCenterDeltaX: this.state.cursorCenterDeltaX,
          cursorCenterDeltaY: this.state.cursorCenterDeltaY,
          cursorPositionX: this.state.cursorPositionX,
          cursorPositionY: this.state.cursorPositionY,
          windowWidth: this.state.windowWidth,
          windowHeight: this.state.windowHeight,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
