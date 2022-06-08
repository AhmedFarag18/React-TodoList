import React, { Component } from 'react'
import './AddItem.css';

class AddItem extends Component {

state = {
      id:1,
      name:'',
      age:'',
      address:''
    };

  handleChange = (e)=>{
    this.setState({
          id:this.state.id,
          [e.target.id]: e.target.value,
        })
  }

 handleSubmit = (e)=>{
    e.preventDefault();
    if(e.target.name.value ==='' && e.target.age.value ==='' && e.target.address.value ===''){
      return false;
    }else {
          this.props.addItem(this.state);
          this.setState({
            name:'',
            age:'',
            address:'',
          })
      }
  }



render(){
  return (
    <div className='mt-20 mb-5'>
      <form className='d-flex' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your Name'  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-gray-500 focus:border-sky-600 p-3 outline-none m-2' id='name' onChange={this.handleChange} value={this.state.name} required/>
        <input type='number' placeholder='Age' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-gray-500 focus:border-sky-600 p-3 outline-none m-2' id='age' onChange={this.handleChange} value={this.state.age}  required />
        <input type='text' placeholder='Address' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-gray-500 focus:border-sky-600 p-3 outline-none m-2' id='address' onChange={this.handleChange} value={this.state.address} required />
        <button className='d-inline-block p-3 cursor-pointer outline-none rounded-lg bg-sky-700 text-white'>
        <span><svg className="w-6 h-6 d-inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
        <span>Add Item</span>
        </button>
      </form>
    </div>
  )
}
}

export default AddItem;