import { React, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';



function ProductList() {
  const [allProduct, setProduct] = useState([])
  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/getAllProduct')
    setProduct(result.data.products);
  }
  console.log(allProduct);
  useEffect(() => {
    fetchData()

  },[])
  return (

    <div>
      <div className='text-end mt-3 me-5'>
        <Link to={'/add'}>
        <Button variant="success">Add category</Button>
        </Link>
      </div>
      <Table striped bordered hover className='w-75 container border mt-4'>
        <thead>
          <tr>
            <th>id</th>
            <th>CATEGORIES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            allProduct?.map((item,index )=> (
             <>
              <tr>
              <td>{index+1}</td>
              <td>{item.category_name}</td>
              <Link to={'/add_sub'}> <Button className='me-4 p-2 mt-2 mb-2' variant="danger"> <i class="fa-solid fa-pen-to-square"></i>ADD SUBCATEGORY</Button> </Link> <Link to={'view/'+item.id}><Button className='me-4 p-2 mt-2 mb-2' variant="info"><i class="fa-solid fa-street-view"></i>PRODUCT VIEW</Button></Link>
            </tr>
           
            </>
            ))
          }
         
        </tbody>
      </Table>

    </div>
  )
}

export default ProductList