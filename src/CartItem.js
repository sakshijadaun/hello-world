import React from 'react';

class CartItem extends React.Component {
  
   
  render () {
    console.log('this.props',this.props);
    const { price, title, qty } = this.props.product;
    const {product,
       onIncreaseQuantity, 
       onDecreaseQuantity,
       onDeleteProduct
      }= this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/plus-circle-64.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/minus-circle-64.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-16-64.png"
              onClick={() => onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;