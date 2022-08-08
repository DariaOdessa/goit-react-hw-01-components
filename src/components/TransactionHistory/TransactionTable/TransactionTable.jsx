import PropTypes from 'prop-types';
import { Transaction } from '../Transaction/Transaction';
import { Box } from 'components/Box';
import { TableHead } from './TransactionTable.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <Box border="normal" borderColor="grey" as="table" width="700px" mx="auto">
  <TableHead>
    <tr>
      <Box p={4} as="th">Type</Box>
      <Box p={4} as="th">Amount</Box>
      <Box p={4} as="th">Currency</Box>
    </tr>
  </TableHead>

   <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
            <Transaction
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
        ))}        
  
  </tbody>
</Box>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        }),

    ),
}
