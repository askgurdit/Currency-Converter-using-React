import React, { useState } from 'react';
import { InputBox } from './components';  
import useCurrencyInfo from './hooks/useCurrencyInfo';  

function App() {
  const [amount, setAmount] = useState(0);  // State for amount to convert
  const [from, setFrom] = useState("usd");  // State for source currency
  const [to, setTo] = useState("inr");  // State for target currency
  const [convertedAmount, setConvertedAmount] = useState(0);  // State for converted amount

  const currencyInfo = useCurrencyInfo(from);  // Custom hook to fetch currency information for 'from' currency
  const options = Object.keys(currencyInfo);  // Array of currency options based on fetched data

  // Function to swap 'from' and 'to' currencies
  const swap = () => {
    setFrom(to); 
    setTo(from); 
    setConvertedAmount(amount); 
    setAmount(convertedAmount); 
   };

  // Function to perform currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);  // Convert amount based on selected currencies
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();  // Prevent default form submission
              convert();  // Call convert function to perform currency conversion
            }}
          >
            <div className="w-full mb-1">
              {/* InputBox component for 'From' currency */}
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 mb-1">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}  // Button to swap 'from' and 'to' currencies
              >
                Swap
              </button>
            </div>
            {/* InputBox component for 'To' currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisabled={true}  // Disable amount input for 'To' currency
              />
            </div>
            {/* Button to submit form and initiate currency conversion */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
