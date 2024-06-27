import { useEffect, useState } from "react";

// Custom React hook to fetch currency information based on the provided currency code
function useCurrencyInfo(currency) {
    // State to store the fetched currency data
    const [data, setData] = useState({});

    // Effect hook to fetch data when the 'currency' dependency changes
    useEffect(() => {
        // Fetching data from the currency API using the provided currency code
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())  // Parse the JSON response
            .then((json) => {
                setData(json[currency]);  // Update state with the fetched currency data
                //console.log(json[currency]);  // Log the fetched data to the console (optional)
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);  // Log any errors that occur during fetch
            });
    }, [currency]);  // Dependency array ensures this effect runs when 'currency' changes

    return data;  // Return the fetched currency data to the component using this hook
}

export default useCurrencyInfo;  // Export the custom hook for use in other components
