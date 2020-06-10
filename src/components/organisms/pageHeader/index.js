import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'Components/atoms/sectionTitle';
import Navigation from 'Components/molecules/navigation';

const PageHeader = ({ title }) => (
  <Fragment>
    <SectionTitle>{title}</SectionTitle>
    <Navigation />
  </Fragment>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
