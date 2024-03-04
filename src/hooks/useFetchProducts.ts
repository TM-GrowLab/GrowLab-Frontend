import axios from "axios";
import { Product } from "../types/Product";
import { useState, useEffect } from "react";

export const useFetchProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Product[]>("http://localhost:3000/api/products");
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError("Error fetching products");
                setLoading(false);
            }
        };

        fetchData();

    }, []);
    console.log(products)

    return { products, loading, error };
};
