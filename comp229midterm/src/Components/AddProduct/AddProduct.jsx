import './AddProduct.css';
import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const productInfo = `
            Name: ${product.name}
            Description: ${product.description}
            Price: ${product.price}
            Category: ${product.category}
            Quantity: ${product.quantity}
        `;
        alert(productInfo);
        console.log(product);
    }    

    return (
        <form onSubmit={handleSubmit} className="add-product-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={product.name} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    value={product.description} 
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    value={product.price} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={product.category} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input 
                    type="number" 
                    id="quantity" 
                    name="quantity" 
                    value={product.quantity} 
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setProduct({name: '', description: '', price: '', category: '', quantity: ''})}>Cancel</button>
        </form>
    );
}

export default AddProduct;
