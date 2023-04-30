import PropTypes from 'prop-types';
import Transaction from './Transaction';
import cssModule from './Transactiones.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={cssModule['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.shape({ id: PropTypes.string.isRequired }),
};

export default TransactionHistory;
