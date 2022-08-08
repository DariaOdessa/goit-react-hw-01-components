import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <Box display="flex" flexDirection="column" gridGap={3} mb={6}  alignItems="center" as="ul">
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </Box>
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