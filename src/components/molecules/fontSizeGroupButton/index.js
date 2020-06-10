import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/atoms/Button';
import FontUtil from 'Utils/fontUtil';

class FontSizeGroupButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: FontUtil.rootFontSize,
    };
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
  }

  handleFontSizeChange(fontSize) {
    this.setState({ fontSize }, () => {
      document.querySelector(':root').style.fontSize = `${fontSize}px`;
    });
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Button onClick={() => this.handleFontSizeChange(FontUtil.decrementSize())}>A -</Button>
        <Button onClick={() => this.handleFontSizeChange(FontUtil.resetSize())}>A</Button>
        <Button onClick={() => this.handleFontSizeChange(FontUtil.incrementSize())}>A +</Button>
      </div>
    );
  }
}

FontSizeGroupButton.propTypes = {
  className: PropTypes.string,
};

FontSizeGroupButton.defaultProps = {
  className: '',
};

export default FontSizeGroupButton;
