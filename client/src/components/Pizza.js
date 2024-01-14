import React from 'react'

export default function Pizza({pizza}) {
  return (
    <div>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className='img-fluid' style={{height:'200px',width:'200px'}}/>

        <div className='flex-container'>

            <div className='w-100'>
                <p>Variants</p>
            </div>

            <div className='w-100'>
                <p>Prices</p>
            </div>

        </div>
    </div>
  )
}
