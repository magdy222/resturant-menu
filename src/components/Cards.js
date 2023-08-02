import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Cards = ({itemsData}) => {
  return (
    <Row>
    {
      itemsData.length >=1 ? (itemsData.map ((item)=>{
        return  <Col sm='12' md="6" className='d-flex justify-content-center justify-items-center mb-3 ' >
        <Card className='d-flex flex-row '>
          <Card.Img variant="top" className='img'  src={item.img}/>
          <Card.Body>
          <div className='d-flex flex-col justify-content-between '>
            <Card.Title >{item.title}</Card.Title>
          </div>  
            <Card.Text className='fontow description py-5'>
               {item.description} 
            </Card.Text>
            <Card.Text className='fontow description px-3'>
               <p className='color '>{item.price}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      }) ) : <h3> لا يوجد وجبات</h3>
    }
    </Row>
  )
}
export default Cards;