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
        const filter = e.target.value.toLowerCase();
        const searchedName = product.name.toLowerCase();
        const searchedCategory = product.category.toLowerCase();
        if(searchedName.includes(filter) || searchedCategory.includes(filter)){
          return product
        }
      })
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
        <div className="columns">
        <div className="column is-one-third"></div>
        <input className="input" type="text" placeholder="Search..." onChange={this.handleChange}/>
        <div className="column is-one-third"></div>
        </div>
        <ul>
        <ProductList products={this.state.filtered} addToCart={this.props.addToCart}/>
        </ul>
        </div>




  )
}


}
export default SearchBar
