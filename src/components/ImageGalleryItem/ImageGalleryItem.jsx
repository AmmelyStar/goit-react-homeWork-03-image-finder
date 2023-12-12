import { Component } from "react";
import PropTypes from 'prop-types';
import css from "./style.module.css"
import Modal from "components/Modal/Modal";

class ImageItem extends Component{
   constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

   toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


     render() {
   const { image } = this.props;
   const { showModal } = this.state;
    return (
      <>
        <li className={css.item}>
          <img className={css.image}
            src={image.webformatURL} 
            alt={image.tags} 
            onClick={this.toggleModal}            
          />

          {showModal && ( 
            <Modal
              largeImageURL={image.largeImageURL} 
              tags={image.tags} 
              onClose={this.toggleModal} 
            />
             )}
        </li>
          
          
        
      </>
    );
  }

}

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;