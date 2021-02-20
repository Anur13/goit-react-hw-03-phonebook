import React from 'react';
import Contacts from './Contacts';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ list, deleteID }) => {
  return (
    <ul className={styles.list}>
      {list.map(item => {
        return <Contacts key={item.id} {...item} deleteID={deleteID} />;
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  list: PropTypes.array.isRequired,
  deleteID: PropTypes.func.isRequired,
};

export default ContactsList;
