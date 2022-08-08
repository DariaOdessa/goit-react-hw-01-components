import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TransactionTable, TableHead, TableRow, TableCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable>
            <TableHead>
                <tr>
                <Box p={4} as="th">Type</Box>
                <Box p={4} as="th">Amount</Box>
                <Box p={4} as="th">Currency</Box>
                </tr>
            </TableHead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                <TableRow key={id}>
                    <TableCell>{type}</TableCell>
                    <TableCell >{amount}</TableCell>
                    <TableCell >{currency}</TableCell>
                </TableRow>
                ))}   
            </tbody>
        </TransactionTable>
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
