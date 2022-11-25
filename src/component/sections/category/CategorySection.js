import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategorySection() {

    const [allProducts,setAllProducts] = useState([])
 
    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/products`)
        .then(res => res.json())
        .then(d => {
            setAllProducts(d)
        })
        .catch(err => console.log(err))

    },[])

        const categoryMenu = [...new Set(allProducts.map(d => d.category))]
       

  return (

         <div className="px-6 py-4">
          <ul>

            {categoryMenu.length > 0 && categoryMenu.map((d,i) => (
                <li className='my-4' key={i}>
                    <Link to={`/category/${d}`}>{d}</Link>
                </li>
            ))}



          </ul>


        </div>
  )
}
