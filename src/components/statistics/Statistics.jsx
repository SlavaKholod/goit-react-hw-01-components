import PropTypes from 'prop-types';
import StatItem from './StatItem';
import cssModule from './Spatistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={cssModule.statistics}>
      {title && <h2 className={cssModule.title}>{title}</h2>}
      <ul className={cssModule['stat-list']}>
        {stats.map(element => {
          let randomColor = Math.floor(Math.random() * 16777215).toString(16);
          return (
            <li
              className={cssModule.item}
              key={element.id}
              style={{ backgroundColor: `#${randomColor}` }}
            >
              <StatItem label={element.label} percentage={element.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
