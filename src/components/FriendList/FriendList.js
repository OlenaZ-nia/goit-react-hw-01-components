import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
