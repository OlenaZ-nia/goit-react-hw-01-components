import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
