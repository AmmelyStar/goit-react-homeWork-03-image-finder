import css from "./style.module.css"
import { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    searchName: '', 
    inputValue: '',
  };

    handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

   handleSubmit = event => {
    event.preventDefault(); 
    const searchQuery = this.state.inputValue.trim(); 
    this.props.onSubmit(searchQuery); 
     
     this.setState({ inputValue: '' });
  };

  

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            name="searchName"
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;