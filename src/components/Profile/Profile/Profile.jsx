import PropTypes from 'prop-types';
import { UserWrapper, UserFoto, Username, Userinfo, StatsWrapper } from "./Profile.styled"
import { Box } from "components/Box";
import { Stats } from "../Stats/Stats"

export const Profile = ({
    user: { username, tag, location, avatar, stats },
}) => {
    return (        
        <UserWrapper>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                my={5}
                gridGap={4}
            >
                <UserFoto src={avatar} alt={username} width="240" />
                <Username>{username}</Username>
                <Userinfo>@{tag}</Userinfo>
                <Userinfo>{location}</Userinfo>
            </Box>
            
            <StatsWrapper>
               <Stats text="Followers" stats={stats.followers} />
                <Stats text="Views" stats={stats.views} />
                <Stats text="Likes" stats={stats.likes} /> 
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
