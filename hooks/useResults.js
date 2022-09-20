import React, { useState, useEffect } from "react";

import yelp from "../api/yelp";

export default useResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = async(searchTerm) => {
        setLoading(true);
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: "san jose",
                },
            });
            setLoading(false);
            setResults(response.data.businesses);
        } catch (error) {
            setResults([]);
            setErrorMessage("something went wrong");
        }
    };

    useEffect(() => {
        searchApi("pasta");
    }, []);

    return { searchApi, results, loading, errorMessage };
};