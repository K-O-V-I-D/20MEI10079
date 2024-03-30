import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetailPage = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`API_ENDPOINT_URL/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>{product.name}</h2>
                    {/* Display other product details */}
                </div>
            )}
        </div>
    );
};

export default ProductDetailPage;
