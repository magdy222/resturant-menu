import React from 'react'
import {Col, Row} from 'react-bootstrap'
const Header = () => {
  return (
    <Row>
        <Col sm='12' className='justify-content-center text-center fs p-5 '>
            <div className='list'>قائمة الطعام</div>
            <div className='justify-content-center d-flex py-1'>
                <p className='underline'></p>
            </div>
        </Col>
    </Row>
  )
}
export default Header;