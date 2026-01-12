import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        if (!url) return;

        const fetchData = async() => {
            try {
                setLoading(true);

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log(error);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);

    return { data, error, loading };
}

export default useFetch
