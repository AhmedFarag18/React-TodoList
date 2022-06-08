import React, { Fragment } from 'react';
import './TodoItems.css';

const TodoItems = (props) => {

  const {items,deleteItem} = props;

  let length = items.length;


  const ListItems = items.map(({id,name,age,address},idx)=>{
      return (
      <tbody key={idx++}>
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
          <td className="px-6 py-4">{name} </td>
          <td className="px-6 py-4">{age} </td>
          <td className="px-6 py-4">{address}</td>
          <td className="px-6 py-4" onClick={()=>{deleteItem(id)}}>
              <span className="font-bold text-red-600 hover:underline cursor-pointer">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              </span>
          </td>
      </tr>
      </tbody>
  )
});


  return (
    <Fragment>
      
      <div className='container m-auto relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th className='px-6 py-3'>Name</th>
                <th className='px-6 py-3'>Age</th>
                <th className='px-6 py-3'>Address</th>
                <th className='px-6 py-3'>Delete</th>
              </tr>
          </thead>
            {length ? (ListItems) : (<tbody><tr><td className='empty p-4 text-center h-20' colSpan={4}>Oops...! No Items to Show</td></tr></tbody>)}
        </table>
      </div>
    </Fragment>
  )
}
export default TodoItems;