import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Category = ({filteredByCategory,allCategory }) => {
  const onFilter = (cat)=>{
    filteredByCategory(cat)
  }

  return (
    <Row>
        <Col className='d-flex justify-content-center '>
        {
          allCategory.length >=1 ? (allCategory.map((cat)=>{
            return (  
              <div className='pb-5'>
                  <button onClick={()=> onFilter(cat)} className='btn btn-outline-success mx-2'>{cat}</button>
              </div>
      ) })) : <h3>لايوجد تصنيفات</h3>
        }
        </Col>
    </Row>
  )
}
export default Category;