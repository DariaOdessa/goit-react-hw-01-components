import PropTypes from 'prop-types';
import { StatTitle } from './StatisticsTitle.styled';

export const StatisticsTitle = ({ text }) => {
  return <StatTitle>{text}</StatTitle>;
};

StatisticsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
