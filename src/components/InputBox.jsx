// For from container
import React, {useId} from 'react';

// InputBox component for amount input and currency selection
function InputBox({
    label, // Label for the input box ("From" or "To")
    amount, // Current amount value
    onAmountChange, // Function handler for amount change
    onCurrencyChange, // Function handler for currency change
    currencyOptions = [], // List of currency options for the select dropdown
    selectCurrency = "usd", // Default selected currency
    amountDisable = false, // Flag to disable amount input
    currencyDisable = false, // Flag to disable currency dropdown
    className = "", // Additional CSS classes for styling
}) {
    const amountInputId = useId(); // Generate unique ID for amount input field

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;

