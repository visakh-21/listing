import axios from 'axios'
import {React,useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';



function Addsub() {
   const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[price,setPrice]=useState('')
  //  const [productName,setProduct] =useState('')

  useEffect(()=>{
     setId(uuid().slice(0,3))

    // setProduct(localStorage.getItem("type"))
  
  },[]) 
  
  const addsubCategory= async(e)=>{
    e.preventDefault(e)
   setId(uuid().slice(0,3));
  
    const body={
      id,
      itemname:name,
      item_price:price
      
    }
   const result=await axios.post('http://localhost:8000/addSubProduct',body)
   alert(result.data.message)
  }
  

  return (
    <div>
 <Form className='w-75 container'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Group>
      <Button onClick={(e)=>addsubCategory(e)} variant="primary" type="submit">
        Add
      </Button>
    </Form>

    </div>
  )
}

export default Addsub