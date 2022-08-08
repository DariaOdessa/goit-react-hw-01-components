import PropTypes from 'prop-types';
import { Friend, Avatar, Name, Status } from './FriendListItem.Styled';
// import { StatItem, Label, Value } from './StatisticItem.styled';

export const FriendListItem = ({isOnline, avatar, name }) => {
    return (
        <Friend>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} width="100px"/>
            <Name>{name}</Name>
        </Friend>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}