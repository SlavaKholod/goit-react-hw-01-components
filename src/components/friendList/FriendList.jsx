import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import cssModule from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={cssModule['friend-list']}>
      {friends.map(element => {
        return (
          <FriendListItem
            key={element.id}
            avatar={element.avatar}
            name={element.name}
            isOnline={element.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
