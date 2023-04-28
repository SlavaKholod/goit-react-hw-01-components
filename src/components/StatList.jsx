import PropTypes from 'prop-types';
import StatElement from './StatElement';

const StatList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(element => {
        return (
          <li className="item" key={element.id}>
            <StatElement
              label={element.label}
              percentage={element.percentage}
            />
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatList;
