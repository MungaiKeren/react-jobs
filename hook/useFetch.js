import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

const rapidApiKey = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url:   `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': "3cb98b7560msheccfaae55673213p172577jsn52276e79510a",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            // console.log(response.data.data);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
            alert("An error occured. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, reFetch}
}

export default useFetch;