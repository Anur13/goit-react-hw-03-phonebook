import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ name, number, id, deleteID }) => {
  const handleDelete = () => {
    deleteID(id);
  };
  return (
    <>
      <li>
        <span className={styles.name}>
          {name}: {number}
        </span>

        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};
Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteID: PropTypes.func.isRequired,
};

export default Contacts;
