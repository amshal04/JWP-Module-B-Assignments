import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../Data';

const SingleProduct = () => {
    
  const {id} = useParams();
  console.log(id);


  const filterData = data.filter((e,i)=>{
    return e.id == id
  })

  console.log(filterData);
  return (
    <div>
      <h1>Single product</h1>

      {
        filterData.map((e,i)=>{
            return (
                <div>
                    <img src={e.image} alt="" />
                    <h1>{e.title}</h1>
                    <h1>{e.description}</h1>

                    </div>
            )
        })
      }
    </div>
  )
}

export default SingleProduct