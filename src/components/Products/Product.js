import { useOutletContext, useParams } from "react-router-dom"

export function Product() {
    const { id } = useParams();
    const [products, setProducts] = useOutletContext();
    const product = products.find(b => b.id === +id);
    if (product == undefined) {
        return (
            <p>Not find picture by id = {id}</p>
        )
    }
    else {
        return (
            <div className="product">
                <h1>{product.name}</h1>
                <h2>{product.price} грн</h2>
                <h2>{product.period}</h2>
                {product.photo ? (
                    <img src={product.photo} alt={product.title} />
                ) : (
                    <img src="../images/steal.jpg" alt="Default" />
                )}
            </div>
        )
    }
}