// Define your base API URL
const BASE_URL = 'http://127.0.0.1:8000/api/'; // Replace with your actual base URL

// This function handles fetching data from a given endpoint relative to the base URL
export const fetchData = async (endpoint, options = {}) => {
    try {
        // Construct the full URL by appending the endpoint to the base URL
        const url = `${BASE_URL}${endpoint}`;

        console.log(url);
        

        const response = await fetch(url, options);

        // Check if the response is ok (status 200-299)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Parse the response as JSON
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
};