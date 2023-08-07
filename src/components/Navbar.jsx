import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

function Index() {
    return (
        <div style={{ background: "#121212" }} className='overflow-hidden border-bottom border-secondary'>
            <div className='d-none d-sm-block'>
                <Link to={'/'}>
                    <h2 className='pt-4 pb-3 text-white text-center'><img src={logo} alt="logo" />{' '}สถานที่ท่องเที่ยวยอดนิยมในประเทศไทย</h2>
                </Link>
            </div>
            <div className='d-block d-sm-none'>
                <Link to={'/'}>
                    <h4 className='pt-4 pb-3 text-white text-center'><img src={logo} alt="logo" />{' '}สถานที่ท่องเที่ยวยอดนิยมในประเทศไทย</h4>
                </Link>
            </div>
        </div>
    )
}

export default Index