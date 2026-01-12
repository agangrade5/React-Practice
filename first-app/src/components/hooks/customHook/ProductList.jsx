import useFetch from './hooks/useFetch';

const ProductList = () => {
    const { data, error, loading } = useFetch(
        'https://fakestoreapi.com/products'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {
                data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    );
};

export default ProductList
