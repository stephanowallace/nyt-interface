import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const CenterContent = ({ children }) => (
  <Fragment>
    <div className={styles.body}>
      {children}
    </div>
  </Fragment>
);

CenterContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
};

export default CenterContent;
