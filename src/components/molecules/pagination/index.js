import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'Components/atoms/linkButton';
import SecondaryText from 'Components/atoms/secondaryText';
import Select from 'Components/atoms/select';
import styles from './styles.css';

const PaginationSelector = (selectedPage, label, onClickFunc, selected, disabled) => (
  <li className={selected ? styles.selected : ''} key={`${selectedPage}${label}`}>
    <LinkButton disabled={disabled} onClick={onClickFunc}>
      {label}
    </LinkButton>
  </li>
);

const PageNumberSelector = (numberOfPages, onClick, selectedPage) => (
  Array.from(Array(numberOfPages))
    .map((_, index) => PaginationSelector(
      selectedPage,
      index + 1,
      onClick.bind(this, index + 1),
      selectedPage === index + 1,
      false,
    ))
);

const Pagination = ({
  numberOfPages,
  onPageChange,
  onPageSizeChange,
  selectedPage,
  selectedPageSize }) => (
    <div className={styles.pagination}>
      <div className={styles.itemsPerPage}>
        <Select
          onChange={onPageSizeChange}
          options={[
            { label: '5', value: '5' },
            { label: '10', value: '10' },
            { label: '20', value: '20' },
          ]}
          selectedValue={selectedPageSize}
        />
        <SecondaryText className={styles.itemsPerPageText}>
          <p>items per page</p>
        </SecondaryText>
      </div>
      <nav>
        <ul className={styles.list}>
          {PaginationSelector(selectedPage, '<', onPageChange.bind(this, selectedPage - 1), false, selectedPage === 1)}
          {PageNumberSelector(numberOfPages, onPageChange, selectedPage)}
          {PaginationSelector(selectedPage, '>', onPageChange.bind(this, selectedPage + 1), false, numberOfPages === selectedPage)}
        </ul>
      </nav>
    </div>
);

Pagination.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  selectedPage: PropTypes.number.isRequired,
  selectedPageSize: PropTypes.shape({
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  }),
};

Pagination.defaultProps = {
  selectedPageSize: {
    label: '',
    value: '',
  },
};

export default Pagination;
