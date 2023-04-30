import PropTypes from 'prop-types';
import cssModule from './FriendList.module.css';

const FriendListItem = ({  avatar, name, isOnline }) => {
  return (
    <li className={cssModule.item}>
      {isOnline ? (
        <span className={cssModule.online}></span>
      ) : (
        <span className={cssModule.ofline}></span>
      )}
      <img
        className={cssModule.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={cssModule.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
