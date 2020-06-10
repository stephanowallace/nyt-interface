import { Component } from 'react';
import PropTypes from 'prop-types';
import Constants from 'Constants';

class Responsive extends Component {
  constructor() {
    super();
    this.timeout = null;
    this.state = { mode: null };
    this.mounted = true;
  }

  componentDidMount() {
    this.setMode();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(this.setMode.bind(this), 300);
  }

  getScreenMode() {
    const screenWidth = window.innerWidth;
    const { sizes } = this.props;
    if (screenWidth < sizes.extraSmall) return Constants.SCREEN_SIZES.EXTRA_SMALL;
    if (screenWidth >= sizes.extraSmall && screenWidth < sizes.small) {
      return Constants.SCREEN_SIZES.SMALL;
    }
    if (screenWidth >= sizes.small && screenWidth < sizes.medium) {
      return Constants.SCREEN_SIZES.MEDIUM;
    }
    return Constants.SCREEN_SIZES.LARGE;
  }

  setMode() {
    const mode = this.getScreenMode();
    return this.mounted && this.setState({ mode });
  }

  getContext() {
    return { ...this.state };
  }

  render() {
    const { children } = this.props;
    return children(this.getContext());
  }
}

Responsive.propTypes = {
  children: PropTypes.func.isRequired,
  sizes: PropTypes.shape({
    extraSmall: PropTypes.number.isRequired,
    small: PropTypes.number.isRequired,
    medium: PropTypes.number.isRequired,
    large: PropTypes.number.isRequired,
  }),
};

Responsive.defaultProps = {
  sizes: {
    extraSmall: Constants.SCREEN_SIZES.EXTRA_SMALL,
    small: Constants.SCREEN_SIZES.SMALL,
    medium: Constants.SCREEN_SIZES.MEDIUM,
    large: Constants.SCREEN_SIZES.LARGE,
  },
};

export default Responsive;
