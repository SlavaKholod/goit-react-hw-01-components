import PropTypes from 'prop-types';
import cssModule from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={cssModule.online}></span>
      ) : (
        <span className={cssModule.ofline}></span>
      )}
      <img className={cssModule.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={cssModule.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
