import PropTypes from 'prop-types';
import { StatItem, Label, Value } from './StatisticItem.styled';

export const StatisticItem = ({label, percentage }) => {
    return (
        <StatItem>
            <Label>{label}</Label>
            <Value>{percentage}%</Value>
        </StatItem>
    );
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}