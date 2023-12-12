import PropTypes from 'prop-types';
import css from './style.module.css'
const Button = ({ onClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onClick}>
        Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;