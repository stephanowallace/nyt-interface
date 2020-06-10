import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import selectStyles from './reactSelectCustomStyles';
import styles from './styles.css';

const Select = ({ className, onChange, options, selectedValue }) => (
  <div className={`${styles.container} ${className}`}>
    <ReactSelect
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
      }}
      onChange={onChange}
      options={options}
      placeholder=""
      menuPlacement="top"
      styles={selectStyles}
      value={selectedValue}
    />
  </div>
);

const selectPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]).isRequired;

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: selectPropType,
    value: selectPropType,
  })).isRequired,
  selectedValue: PropTypes.shape({
    label: selectPropType,
    value: selectPropType,
  }),
};

Select.defaultProps = {
  className: '',
  selectedValue: '',
};

export default Select;
