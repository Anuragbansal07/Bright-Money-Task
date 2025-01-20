import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '../redux/actions/billActions';

const BillForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBill({ ...formData, id: Date.now() }));
    setFormData({ description: '', category: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-4">
      <div className="row g-3 align-items-center">
        <div className="col-md-3">
          <input
            type="text"
            name="description"
            className="form-control"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="FoodNDining">Food & Dining</option>
            <option value="Utility">Utility</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Travel">Travel</option>
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="number"
            name="amount"
            className="form-control"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mt-3 text-end">
        <button type="submit" className="btn btn-primary">
          Add Bill
        </button>
      </div>
    </form>
  );
};

export default BillForm;
