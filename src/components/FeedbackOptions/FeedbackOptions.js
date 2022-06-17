import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleClick }) => (
  <ul className={s.list}>
    {options.map(option => (
      <li className={s.item} key={option}>
        <button
          type="button"
          className={s[option]}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
