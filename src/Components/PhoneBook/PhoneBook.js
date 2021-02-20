import React, { Component } from 'react';
import styles from './PhoneBook.module.css';
import PropTypes from 'prop-types';

class PhoneBook extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  handleNameChange = event => {
    const { value } = event.currentTarget;

    this.setState({
      name: value,
    });
  };

  handleNumberChange = event => {
    let { value } = event.currentTarget;

    this.setState({
      number: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const check = this.props.ContactsList.find(
      item => item.name === this.state.name,
    );
    if (check) {
      alert('Card with this name already exists');
      return;
    }
    // const checkForName = item => {
    //   return item.name !== this.state.name;
    // };
    // const result = this.props.ContactsList.every(checkForName);
    // if (result === false) {
    //   alert('Card with this name already exists');
    //   return;
    // }
    this.setState({
      name: '',
      number: '',
    });
    this.props.HandleSubmit(this.state);
  };

  render() {
    const { HandleSubmit, ContactsList } = this.props;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            onChange={this.handleNumberChange}
            value={this.state.number}
            type="tel"
            pattern="[0-9]{7}"
            placeholder="533-33-23"
            minLength="7"
            maxLength="7"
            required
          />
        </label>
        <button className={styles.submitButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

PhoneBook.propTypes = {
  HandleSubmit: PropTypes.func.isRequired,
  ContactsList: PropTypes.array.isRequired,
};

export default PhoneBook;
