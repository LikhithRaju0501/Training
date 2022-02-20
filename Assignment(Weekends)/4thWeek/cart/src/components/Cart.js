import React, { useState } from 'react'
import { Button,Card,Badge } from 'react-bootstrap'
import './Cart.css'
import mobile from './assets/mobile.jpg'
import laptop from './assets/laptop.jpg'
import shoes from './assets/shoes.jpg'
import headphones from './assets/headphones.jpg'
import backpack from './assets/backpack.jpg'
import cap from './assets/cap.jpg'
import ModalComp from './ModalComp'

const Cart = () => {
    const [ItemList, setItemList] = useState([
        {name:'mobile',itemName:'MOBILE PHONE',img:mobile,quantity:0,cost:1000},
        {name:'laptop',itemName:'LAPTOP',img:laptop,quantity:0,cost:4000},
        {name:'shoes',itemName:'SHOE',img:shoes,quantity:0,cost:200},
        {name:'headphones',itemName:'HEADPHONE',img:headphones,quantity:0,cost:100},
        {name:'backpack',itemName:'BACKPACK',img:backpack,quantity:0,cost:500},
        {name:'cap',itemName:'CAP',img:cap,quantity:0,cost:50},
    ])
    const [Show, setShow] = useState(false)
    const [editedValue, seteditedValue] = useState('')
    const [showEdit, setshowEdit] = useState(false)
    const [index, setindex] = useState(-1)
    const [totalCost, settotalCost] = useState(0)

    const handleAdd=(e)=>{
        if(e=='mobile')setItemList([...ItemList],ItemList[0].quantity+=1)
        else if(e=='laptop')setItemList([...ItemList],ItemList[1].quantity+=1)
        else if(e=='shoes')setItemList([...ItemList],ItemList[2].quantity+=1)
        else if(e=='headphones')setItemList([...ItemList],ItemList[3].quantity+=1)
        else if(e=='backpack')setItemList([...ItemList],ItemList[4].quantity+=1)
        else if(e=='cap')setItemList([...ItemList],ItemList[5].quantity+=1)
        let temp = 0;
        ItemList.map((item)=>temp+=(item.quantity*item.cost))
        settotalCost(temp);
    }
    const handleDelete=(e)=>{
        const index = ItemList.findIndex(item=>item.name==e)
        const newItems=[...ItemList]
        newItems[index].quantity-=1;
        setItemList(newItems)
        let temp = 0;
        ItemList.map((item)=>temp+=(item.quantity*item.cost))
        settotalCost(temp);
    }

    const showModal=()=>{
        setShow(true)
    }
    const closeModal=()=>{
        setShow(false)
    }
    const editedValueChange=(e)=>{
         seteditedValue(e.target.value)
    }
    const setItemValue=()=>{
          const newItems=[...ItemList]
        newItems[index].quantity=editedValue;
        setItemList(newItems)
        seteditedValue('')
        setshowEdit(false)
        let temp = 0;
        ItemList.map((item)=>temp+=(item.quantity*item.cost))
        settotalCost(temp);
    }
    const showInput=(e)=>{
        const temp = ItemList.findIndex(item=>item.name==e)
        setindex(temp)
        setshowEdit(true)
    }
    const clearAll=()=>{
        const clearTemp=[...ItemList];
        clearTemp.map((item)=>item.quantity=0)
        setItemList(clearTemp)
        setshowEdit(false)
        let temp = 0;
        ItemList.map((item)=>temp+=(item.quantity*item.cost))
        settotalCost(temp);
    }
  return (
    <div>
         <Button className='clickModal' onClick={showModal} variant="success">S H O W - C A R T</Button>
         <div className="items">
             {ItemList.map((item)=>{
                 return(
                    <Card className='Card' style={{ width: '100%', marginBottom:'2vh' }}>
                    <Card.Img variant="top" src={item.img} style={{width:'100%',height:'30vh'}} />
                   <Card.Body>
                        <Card.Title>{item.itemName}</Card.Title>
                        <Card.Text>Cost: {item.cost}$</Card.Text>
                        <Button variant="dark" onClick={()=>handleAdd(item.name)}>A D D {item.quantity>0?<Badge bg="secondary">{item.quantity}</Badge>:<div></div>}</Button>
                   </Card.Body>
                   </Card>
                 )
             })}
         </div>
         <ModalComp 
         Show={Show} 
         closeModal={closeModal} 
         ItemList={ItemList} 
         handleDelete={handleDelete} 
         editedValue={editedValue} 
         editedValueChange={editedValueChange} 
         showInput={showInput} 
         showEdit={showEdit}
         setItemValue={setItemValue}
         clearAll={clearAll} 
         totalCost={totalCost}
          />
    </div>
  )
}

export default Cart