import React from 'react';
import Broken from 'Assets/svg/broken.svg';
import Paragraph from 'Components/atoms/paragraph';
import SecondaryText from 'Components/atoms/secondaryText';
import PageHeader from 'Components/organisms/pageHeader';
import CenterContent from 'Layouts/centerContent';
import styles from './styles.css';

const Error = () => (
  <CenterContent>
    <PageHeader title="Error" />
    <div className={styles.content}>
      <Broken />
      <Paragraph>Something unexpected happened</Paragraph>
      <SecondaryText>Please, try again later</SecondaryText>
    </div>
  </CenterContent>
);

export default Error;
