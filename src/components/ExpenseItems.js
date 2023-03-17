import './ExpenseItems.css';

function ExpenseItem(props) {
	const expenseDate = new Date(2021, 2, 28);
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 293.67;

	return (
		<div className='expense-item'>
			<div>{expenseDate.toISOString()}</div>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
