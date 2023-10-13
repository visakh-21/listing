import {React,useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uuid from 'react-uuid';
import axios from 'axios';


function Add() {

  const [id,setId]=useState('')
  const [product,setProduct]=useState('')
  useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])
  const addCategory=async(e)=>{
    // console.log(product);
    e.preventDefault()
    setId(uuid().slice(0,3));

    const body={
    id,
    category_name:product
    }
   const result= await axios.post('http://localhost:8000/addProduct',body)
  //  console.log(data);
  //  alert(result.data.message)
  alert(result.data.message)

  

  //  console.log(result.then=);
  //  alert(result.data)
    //  console.log(body);
  }
  return (
    <div className='w-60 me-5 mr-5'>
     <Form className='p-5 w-75 container'>
    <Form.Group className="mb-3 w-60" controlId="exampleForm.ControlInput1">
      <Form.Label>Category Name</Form.Label>
      <Form.Control onChange={(e)=>setProduct(e.target.value)}  type="text" placeholder=" category" />
    </Form.Group>
    <Button onClick={(e)=>(addCategory(e))}  className='ms-5' variant="danger"> Add Details</Button>
    <Button  className='ms-5' variant="danger"> Cancel</Button>

  </Form>

        
    </div>
  )
}

export default Add