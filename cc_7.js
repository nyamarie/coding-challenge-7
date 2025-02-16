// Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return 'Total Invoice: $${total.toFixed(2)}';
}

// Task 2: Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discount);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let cost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) cost += 10;
    return `Shipping Cost: $${cost.toFixed(2)}`;
}

// Task 5: Returning Values
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Task 6: Higher-Order Functions
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Task 7: Closures
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: $${balance.toFixed(2)}`;
    };
}

// Task 8: Recursion in JavaScript
function calculateGrowth(years, revenue) {
    if (years >= 10) return `Projected Revenue: $${revenue.toFixed(2)}`;
    return calculateGrowth(years + 1, revenue * 1.05);
}
