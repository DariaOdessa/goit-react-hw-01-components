import PropTypes from 'prop-types';
import { UserWrapper, UserCard, UserFoto, Username, Userinfo, StatsWrapper, StatsItem, StatsName, StatsValue } from "./Profile.styled"

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes}}) => {
    return (        
        <UserWrapper>
            <UserCard>
                <UserFoto src={avatar} alt={username} width="240" />
                <Username>{username}</Username>
                <Userinfo>@{tag}</Userinfo>
                <Userinfo>{location}</Userinfo>
            </UserCard>
            
            <StatsWrapper>
                <StatsItem>
                    <StatsName>Followers</StatsName>
                    <StatsValue>{followers}</StatsValue>
                </StatsItem> 
                <StatsItem>
                    <StatsName>Views</StatsName>
                    <StatsValue>{views}</StatsValue>
                </StatsItem> 
                <StatsItem>
                    <StatsName>Likes</StatsName>
                    <StatsValue>{likes}</StatsValue>
                </StatsItem> 
            </StatsWrapper> 
             
        </UserWrapper>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        })
    })
}
