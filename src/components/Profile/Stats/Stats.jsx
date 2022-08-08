import PropTypes from 'prop-types';
import { StatsItem, StatsName, StatsValue } from "./Stats.styled";

export const Stats = ({
    stats, text
}) => {
    return (
        <StatsItem>
            <StatsName>{text}</StatsName>
            <StatsValue>{stats}</StatsValue>
        </StatsItem> 
    )
}

Stats.propTypes = {
    stats: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }