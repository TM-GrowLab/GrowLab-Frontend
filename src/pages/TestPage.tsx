import React from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';

const ProductListPage: React.FC = () => {
    const { products, loading, error } = useFetchProducts();

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div>
                <h1>Product List</h1>
                {error && <div>Error fetching products</div>}
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{product.name} - ${product.age}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ProductListPage;
