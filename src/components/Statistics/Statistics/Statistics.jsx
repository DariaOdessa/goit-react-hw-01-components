import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatisticItem } from "../StatItem/StatisticsItem";
import { StatisticSection, StatList } from "./Statistics.styled";
import { StatTitle} from "../StatisticsTitle/StatisticsTitle.styled"

export const Statistics = ({ stats, title }) => {
    return (
        <StatisticSection>
            <Box display="flex" alignItems="center" justifyContent="crnter" height="80px">
                {{title} && (<StatTitle>{title}</StatTitle>)}
            </Box>
                
            <StatList>
            {stats.map(({ id, label, percentage }) => (
                <StatisticItem
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </StatList>
        </StatisticSection>
      
    );
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }),

    ),
};
    
