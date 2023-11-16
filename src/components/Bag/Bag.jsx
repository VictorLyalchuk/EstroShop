import { AddContext } from '../Contexts/AddContext';
import React, { useContext } from "react";

export function Bag() {
    const { cart, add, sub, remove, calculateTotal } = useContext(AddContext);
    
    return (
        <div>
            <h2>Shopping Bag</h2>
            {cart.length === 0 ? (
                <p>Your bag is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((product) => (
                            <div key={product.id} className='cartBlock'>
                                <div><img src={product.photo}></img></div>
                                <div className='cartText'>
                                    <div className='cartComponent'>
                                        {product.name}
                                    </div>
                                    <div className='cartComponent'>
                                        {product.price} грн
                                    </div>
                                    <div className='cartComponent'>
                                        ({product.quantity} од.)
                                    </div>
                                </div>
                                <div className='CartButton'>
                                    <button onClick={() => add(product)}>add</button>
                                    <button onClick={() => sub(product)}>sub</button>
                                    <button onClick={() => remove({ id: product.id })}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <p>Total: {calculateTotal()} грн</p>
                </div>
            )}
        </div>
    );
}
