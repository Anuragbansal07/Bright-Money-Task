export const addBill = (bill) => ({ type: 'ADD_BILL', payload: bill });
export const editBill = (bill) => ({ type: 'EDIT_BILL', payload: bill });
export const deleteBill = (id) => ({ type: 'DELETE_BILL', payload: id });
export const setFilter = (category) => ({ type: 'SET_FILTER', payload: category });
export const setBudget = (budget) => ({ type: 'SET_BUDGET', payload: budget });
