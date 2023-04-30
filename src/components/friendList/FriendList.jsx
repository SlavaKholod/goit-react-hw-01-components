import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import cssModule from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={cssModule['friend-list']}>
      {friends.map(element => {
        return (
            <li className={cssModule.item} key={element.id}>
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
