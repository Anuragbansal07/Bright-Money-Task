import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBill, setFilter, editBill } from '../redux/actions/billActions';
import BillForm from './BillForm';
import BillFilter from './BillFilter';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import TimeSeriesChart from './TimeSeriesChart';
import './BillDashboard.css';

const BillDashboard = () => {
  const dispatch = useDispatch();
  const { bills, filter } = useSelector((state) => state.bills);
  const [editingBill, setEditingBill] = useState(null);
  const [monthlyBudget, setMonthlyBudget] = useState(5000);

  const highlightBills = () => {
    let budgetRemaining = monthlyBudget;
    const sortedBills = [...bills].sort((a, b) => a.amount - b.amount);
    const highlighted = [];

    for (const bill of sortedBills) {
      if (budgetRemaining - bill.amount >= 0) {
        budgetRemaining -= bill.amount;
        highlighted.push(bill.id);
      } else {
        break;
      }
    }
    return highlighted;
  };

  const highlightedBillIds = highlightBills() || [];

  const filteredBills =
    filter === 'All' ? bills : bills.filter((bill) => bill.category === filter);

  const totalPendingAmount = bills.reduce(
    (total, bill) => total + parseFloat(bill.amount || 0),
    0
  );

  const totalHighlightedAmount = bills
    .filter((bill) => highlightedBillIds.includes(bill.id))
    .reduce((total, bill) => total + parseFloat(bill.amount || 0), 0);

    const handleEditClick = (bill) => {
        setEditingBill(bill);
    };

    const handleSaveEdit = (updatedBill) => {
        dispatch(editBill(updatedBill));
        setEditingBill(null);
    };

    return (
        <div>
  <h2 className="title text-center mt-4 pt-4">ADITHYA'S BILL MANAGER</h2>

  <div className="row align-items-center">
    <div className="col">
      <BillForm />
    </div>
  </div>

  <div className="row align-items-center mb-4">
    <div className="col-md-6">
      <label htmlFor="monthlyBudget" className="form-label">
        Set Monthly Budget (₹) :
      </label>
      <input
        type="number"
        id="monthlyBudget"
        className="form-control"
        value={monthlyBudget}
        onChange={(e) => setMonthlyBudget(Number(e.target.value))}
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="categoryFilter" className="form-label">
        Filter by Category :
      </label>
      <BillFilter
        selectedCategory={filter}
        onChangeCategory={(category) => dispatch(setFilter(category))}
      />
    </div>
  </div>

  {bills.length === 0 ? (
    <p className="text-center mt-4">No bills to display.</p>
  ) : (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredBills.map((bill) => (
          <tr
            key={bill.id}
            className={
              highlightedBillIds.includes(bill.id) ? 'table-success' : ''
            }
          >
            {editingBill && editingBill.id === bill.id ? (
              <>
                <td>
                  <input
                    type="text"
                    value={editingBill.description}
                    onChange={(e) =>
                      setEditingBill({
                        ...editingBill,
                        description: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editingBill.category}
                    onChange={(e) =>
                      setEditingBill({
                        ...editingBill,
                        category: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={editingBill.amount}
                    onChange={(e) =>
                      setEditingBill({
                        ...editingBill,
                        amount: e.target.value,
                      })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={editingBill.date}
                    onChange={(e) =>
                      setEditingBill({ ...editingBill, date: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleSaveEdit(editingBill)}
                  >
                    Save
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{bill.description}</td>
                <td>{bill.category}</td>
                <td>{bill.amount}</td>
                <td>{bill.date}</td>
                <td>
                  <FaEdit
                    className="text-primary cursor-pointer me-3"
                    onClick={() => handleEditClick(bill)}
                  />
                  <FaTrashAlt
                    className="text-danger cursor-pointer"
                    onClick={() => dispatch(deleteBill(bill.id))}
                  />
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )}

  <h5 className="text-end pt-3">Total Min Amount that should be paid (Highlighted) : ₹{totalHighlightedAmount.toFixed(2)}</h5>
  <h5 className="text-end pt-2">Total Monthly Amount : ₹{totalPendingAmount.toFixed(2)}</h5>

  {bills.length > 0 && <TimeSeriesChart bills={bills} />}
</div>
  );
};

export default BillDashboard;
