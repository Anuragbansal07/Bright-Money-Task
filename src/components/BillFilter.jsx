import React from 'react';

const BillFilter = ({ selectedCategory, onChangeCategory }) => {

  const categories = ['All', 'FoodNDining', 'Utility', 'Shopping', 'Education', 'Personal Care', 'Travel'];

  return (
    <div>
      <select
        className="form-select"
        value={selectedCategory}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BillFilter;
