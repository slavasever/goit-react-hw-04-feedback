import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={s.item}>
      <p>Good: {good}</p>
    </li>
    <li className={s.item}>
      <p>Neutral: {neutral}</p>
    </li>
    <li className={s.item}>
      <p>Bad: {bad}</p>
    </li>
    <li className={s.item}>
      <p>Total: {total}</p>
    </li>
    <li className={s.item}>
      <p>Positive feedback: {positivePercentage}%</p>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
