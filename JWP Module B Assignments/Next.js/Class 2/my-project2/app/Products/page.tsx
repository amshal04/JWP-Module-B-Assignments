// import React from 'react'

// const Products = () => {
//   return (
//     <div>
//       <h1>Products Screen</h1>
//     </div>
//   )
// }

// export default Products









// "use client";

// import Link from "next/link";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   title: string;
// }

// const Products = () => {
//   const [data, setData] = useState<Product[]>([]);

//   const getProducts = async () => {
//     const res = await axios.get("https://fakestoreapi.com/products");
//     setData(res.data);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>All Products Screen</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <Link href={`/Products/${item.id}`}>{item.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Products;



















"use client";

import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
}

const Products = () => {
  const [data, setData] = useState<Product[]>([]);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>All Products</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {/* Link to dynamic product page */}
            <Link href={`/Products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
