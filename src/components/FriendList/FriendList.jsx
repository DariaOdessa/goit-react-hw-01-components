import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem/FriendListItem";
import { Friend, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <Friend key={id}>
                    <FriendListItem
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                    />
                </Friend>
            ))}
        </FriendsList>
    );
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),

    ),
}