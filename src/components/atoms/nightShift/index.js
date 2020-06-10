import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class Theme extends Component {
  getContext() {
    return {
      data: this.state,
      actions: {
        nightShift: this.swapTheme.bind(this),
      },
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Provider value={this.getContext()}>
        {children}
      </Provider>
    );
  }
}

Theme.Consumer = Consumer;

export default Theme;
