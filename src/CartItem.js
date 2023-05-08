import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {
    //console.log('this', this.state);
    //setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    //setState form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty+1
      }
    }, () => {
      console.log('this.state', this.state);
    });
  }
  decreaseQuantity = () => {
    const{qty}=this.state;
    if(qty === 0){
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty-1
      }
    });
  }
  render () {
    const { price, title, qty } = this.state;
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
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/minus-circle-64.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn2.iconfinder.com/data/icons/user-interface-line-38/24/Untitled-5-16-64.png"
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