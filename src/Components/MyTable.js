import React, { Component } from 'react';
import axios from 'axios';
import './form.css';
import Box from '@mui/material'
import { Link } from 'react-router-dom';


class Boutiqueform extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      npieces: '',
      name: '',
      price: '',
      avail: '',
      color: '',
      material: ''
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const Data = {
      id: this.state.id,
      npieces: this.state.npieces,
      name: this.state.name,
      price: this.state.price,
      avail: this.state.avail,
     color:this.state.color,
     material:this.state.material
    };
    
    console.log(Data)
    axios.post('http://localhost:8080/order', Data)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });

  };
  render() {

    return (
      
      <form onSubmit={this.handleSubmit}>
        <h2>Order Details</h2>

        <input
          placeholder=' ID'
          type="text"
          name="id"
          
          onChange={this.handleChange}
        />
        
        <input
          placeholder=' Dress name'
          type="text"
          name="name"
          
          onChange={this.handleChange}
        />
        <input
          placeholder=' NumOfPieces'
          type="text"
          name="npieces"
         
          onChange={this.handleChange}
        />
        <input
          placeholder=' Price'
          type="text"
          name="price"
       
          onChange={this.handleChange}
        />
         <input
          placeholder=' Avail'
          type="text"
          name="avail"
       
          onChange={this.handleChange}
        />
        <input
          placeholder=' Color'
          type="text"
          name="color"
       
          onChange={this.handleChange}
        />
        <input
        placeholder=' Material'
        type="text"
        name="material"
     
        onChange={this.handleChange}
      />
       

         
        
       
                <button>ORDER</button>
                <Link to="/getdetail"><button>MY ORDERS</button></Link>
                            </form>
                           
        );
    }
}
export default Boutiqueform;