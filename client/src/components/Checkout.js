import React, {Component} from 'react';




class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: {
        name: "",
        address: "",
        age: 0,
        products: props.cart
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



handleChange(event){
  let propertyName = event.target.name;
  let order = this.state.order;
  order[propertyName] = event.target.value;
  this.setState({order: order})
}

handleSubmit(event){
  event.preventDefault();
  this.props.placeOrder(this.state.order);
}



render(){
  return (
    <div>

    <form name="checkout" onSubmit={this.handleSubmit}>
    <input required type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.order.name}/>
    <input required type="text" placeholder="Address" name="address" onChange={this.handleChange} value={this.state.order.address}/>
    <input required type="number" placeholder="Age" name="age" onChange={this.handleChange} value={this.state.order.age}/>
    <button type="submit">Place Order </button>
    </form>

    </div>
  )
}
}

export default Checkout;
