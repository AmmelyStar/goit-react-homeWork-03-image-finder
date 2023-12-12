import css from './style.module.css'
import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }


  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose(); 
    }
  };

  handleImageClick = () => {
    
  };

  render() {
    const { largeImageURL, tags, onClose } = this.props;

    return (
      <>
        <div className={css.overlay} onClick={onClose}>
          <div
            className={(css.modal, css.close)}
            onClick={this.handleImageClick}
          >
            <img src={largeImageURL} alt={tags} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;