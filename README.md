# Bill Manager Dashboard

## Overview
The **Bill Manager Dashboard** is a React-based web application designed to help users manage their monthly bills efficiently. The dashboard provides features to add, edit, and delete bills, set a monthly budget, filter bills by category, and visualize expenses through a time-series chart.

## Features
- **Add Bills**: Add new bills with details such as description, category, amount, and date.
- **Edit Bills**: Edit existing bill details directly from the dashboard.
- **Delete Bills**: Remove bills that are no longer needed.
- **Highlight Important Bills**: Automatically highlight bills that can be paid within the monthly budget.
- **Set Monthly Budget**: Define your monthly spending limit and visualize how much is left.
- **Filter by Category**: Filter bills by categories for better organization.
- **Expense Visualization**: View your bills over time using a time-series chart.
- **Responsive Design**: Fully responsive for use on desktops and mobile devices.

## Technologies Used
- **Frontend**: React
- **State Management**: Redux
- **Icons**: React Icons
- **Styling**: CSS (Bootstrap classes used alongside custom styles)

## Installation

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bill-manager-dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd bill-manager-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## File Structure
```
Bill Manager Dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── BillForm.jsx
│   │   ├── BillFilter.jsx
│   │   ├── TimeSeriesChart.jsx
│   ├── redux/
│   │   ├── actions/
│   │   │   ├── billActions.js
│   │   ├── reducers/
│   │   │   ├── billReducer.js
│   ├── styles/
│   │   ├── BillDashboard.css
│   ├── App.js
│   ├── index.js
├── package.json
```

## Usage
1. Add a new bill by filling out the form and clicking the "Add Bill" button.
2. Adjust your monthly budget using the input field on the dashboard.
3. Filter bills by category using the dropdown menu.
4. View highlighted bills that fit within your remaining budget.
5. Click the edit or delete icons to modify or remove a bill.
6. Analyze expenses over time with the built-in chart.

Thank you for using the **Bill Manager Dashboard**. Happy budgeting!

