import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

const rapidApiKey = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setIsError(error);
            alert("An error occured. Please try again later.");
        } finally {

        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, isError, reFetch}
}

export default useFetch;