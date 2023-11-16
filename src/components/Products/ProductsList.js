import { Link,  useOutletContext } from "react-router-dom";
import { AddContext } from '../Contexts/AddContext';
import { useContext } from "react";
import "./ProductsList.css";


export function ProductsList() {
    const {count, add}= useContext(AddContext)
    const [products, setProducts] = useOutletContext();
    return (
        <>
            <br></br>
            <div className="card-grid">
                {products.map((p) => (
                    <div key={p.id} className="product-card">
                        <div className="product-header-image"><Link to={`/product/${p.id}`}>
                            {p.photo ? (
                                <img src={p.photo} alt={p.title} />
                            ) : (
                                <img src="../images/steal.jpg" alt="Default" />
                            )}
                        </Link></div>
                        <div className="text-block">
                            <div>{p.name}</div>
                            <div className="red">{p.price} грн</div>
                            <div>{p.period}</div>
                        </div>
                        <button onClick={() => add(p)}>Add to Bag</button>
                    </div>
                ))}
            </div>
        </>
    )
}