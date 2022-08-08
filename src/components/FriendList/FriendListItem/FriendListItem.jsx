import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendListItem.Styled';

export const FriendListItem = ({isOnline, avatar, name }) => {
    return (
        <>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="100px"/>
            <Name>{name}</Name>
        </>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}