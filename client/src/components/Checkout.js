import React, {Component} from 'react';





class Checkout extends Component {

  constructor(props){
    super(props);
    this.state = {
      order: {
        name: "",
        email: "",
        address: "",
        city: "",
        total: props.cartTotal,
        products: props.cart
      },
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//   componentDidMount() {
//   this.setState({
//     products: this.props.cart
//   });
// }



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
    <h3>Billing Details</h3>
    <label for="name"><i className="fa fa-user"></i> Full Name</label>
    <input required id="name" type="text" placeholder="Full Name" name="name" onChange={this.handleChange} value={this.state.order.name}/>
    <label for="email"><i className="fa fa-envelope"></i> Email</label>
    <input type="text" id="email" name="email" placeholder="name@email.com" value={this.state.order.email} onChange={this.handleChange}/>
    <label for="address"><i className="fa fa-address-card-o"></i> Address</label>
    <input required type="text" id="address" placeholder="Address" name="address" onChange={this.handleChange} value={this.state.order.address}/>
    <label for="city"><i className="fa fa-institution"></i> City</label>
    <input type="text" id="city" name="city" placeholder="Glasgow" value={this.state.order.city} onChange={this.handleChange}/>


    <h3>Payment Details</h3>
    <label for="fname">Accepted Cards</label>
      <i class="fa fa-cc-visa"></i>
      <i class="fa fa-cc-amex" ></i>
      <i class="fa fa-cc-mastercard"></i>
    <label for="cardname">Name on Card</label>
    <input type="text" id="cardname" name="cardname" placeholder="MR D DRAPER"/>
    <label for="cardnum">Credit card number</label>
    <input type="text" id="cardnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
    <label for="expiry">Expiry</label>
    <input type="text" id="expiry" name="expiry" placeholder="MM/YY"/>


    <p>Total: £ {this.props.cartTotal}</p>

    <button type="submit">Place Order </button>

    </form>
<<<<<<< HEAD

    <p>Total: £ {this.props.cartTotal}</p>
    
=======
>>>>>>> develop

    </div>
  )
}
}

export default Checkout;
