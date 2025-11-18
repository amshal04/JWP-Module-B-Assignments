// import React from 'react'

// interface SingleProduct {
//     params:{
//         productId:string
//     }
// }

// const ProductDetails = async ({params}:SingleProduct) => {
//     // console.log(params);
//     const {productId} = await params;
//     console.log(productId);
    
    
//   return (
//     <div>
//       <h1>ProductDetails Screen</h1>

//       <h3>{productId}</h3>
//     </div>
//   )
// }

// export default ProductDetails















// // Next.js by default server side component hota hy client side component bana ny ky liye "use client" use karty hn //
// "use client" 

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'


// interface Products {
//     /* question mark ? means Optional hy Like category?:string or without ? means Compulsory dyna hy Like price:number */
//     category?:string,
//     description?:string,
//     id?:number,
//     image:string,
//     title:string,
//     price:number,
//     rating:{
//         rate:number,
//         count:number
//     }
// }

// const Products = () => {

//     let [data,setData] = useState<Products[]>([]);

//     let productData = async() => {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         console.log(response.data);
//         setData(response.data);
        
//     };


//     useEffect(()=>{
//         productData()
//     },[])
//   return (
//     <div>
//       <h1>Products Screen</h1>

//       <ol>
//         {
//             data ? data.map((e,i)=>{
//                 return(
//                     <div key={i}>
//                         <li>{e.title}</li>
//                     </div>
//                 );
//             })
//             : null
//         }
//       </ol>
//     </div>
//   )
// }

// export default Products;

















import React from "react";

interface Params {
  params: { productId: string };
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetails = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const { productId } = await params; // ✅ unwrap the promise
  const id = parseInt(productId, 10);

  if (isNaN(id) || id < 1 || id > 20) return <div>❌ Invalid product ID</div>;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch product");

  const product = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <strong>Price: ${product.price}</strong>
    </div>
  );
};

export default ProductDetails;
