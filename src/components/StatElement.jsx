import PropTypes from 'prop-types';

const StatElement = ({ label, percentage }) => {
  return (
    <>
      {' '}
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

StatElement.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatElement;