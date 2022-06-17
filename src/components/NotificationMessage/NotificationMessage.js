import PropTypes from 'prop-types';
import s from './NotificationMessage.module.css';

const NotificationMessage = ({ message }) => (
  <p className={s.message}>{message}</p>
);

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
