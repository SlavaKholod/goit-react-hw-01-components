import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(element => {
        return (
            <li className="item" key={element.id}>
            <FriendListItem
              avatar={element.avatar}
              name={element.name}
              isOnline={element.isOnline}
              id={element.id}
            />
      </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FriendList;
