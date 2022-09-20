import React, { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default useResults = () => {
    const [results, setResults] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async(searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose",
                },
            });
            setResults(response.data.businesses);
        } catch (error) {
            setResults([]);
            setErrorMessage("something went wrong");
        }
    };

    useEffect(() => {
        searchApi("pasta");
    }, []);

    return { searchApi, results, errorMessage };
};