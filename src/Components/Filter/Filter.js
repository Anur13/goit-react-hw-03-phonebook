import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ HandleFilter }) => {
  const handleFilterInput = event => {
    const { value } = event.currentTarget;
    HandleFilter(value);
  };
  return (
    <>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          onChange={handleFilterInput}
          type="text"
        />
      </label>
    </>
  );
};
Filter.propTypes = {
  HandleFilter: PropTypes.func.isRequired,
};

export default Filter;
