import React from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';

const ProductListPage: React.FC = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.age}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListPage;
