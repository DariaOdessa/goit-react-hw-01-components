import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatTitle, StatisticSection, StatList, StatItem, Label, Value } from "./Statistics.styled";

export const Statistics = ({ stats, title}) => {
    return (
        <StatisticSection>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="80px">
                
                {{title} && (<StatTitle>{title}</StatTitle>)}
                
            </Box>
            
            <StatList>
            {stats.map(({ id, label, percentage }) => (
               <StatItem key={id}>
                    <Label>{label}</Label>
                    <Value>{percentage}%</Value>
                </StatItem>
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
    
