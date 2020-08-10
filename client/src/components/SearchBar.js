import React, {Component} from 'react';
import ProductList from './ProductList.js'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
  this.setState({
    filtered: this.props.products
  });
}

componentWillReceiveProps(nextProps) {
  this.setState({
    filtered: nextProps.products
  });
}
handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.props.products;
      newList = currentList.filter(product => {
        const filter = e.target.value;
        return product.name.toLowerCase().includes(filter.toLowerCase());
      });
    } else {
      newList = this.props.products;
    }
    this.setState({
      filtered: newList
    });
  }
render(){
  return(
    <div>
        <input type="text" placeholder="Search..." onChange={this.handleChange}/>
        <ul>
        <ProductList products={this.state.filtered} addToCart={this.props.handleAddToCart}/>
        </ul>
        </div>
  )
}


}
export default SearchBar
