import PropTypes from 'prop-types';
import cssModule from './Spatistics.module.css';

const StatItem = ({ label, percentage }) => {
  return (
    <>
      <span className={cssModule.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
