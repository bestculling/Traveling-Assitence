import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/iconx.png'

function Index() {
    return (
        <div className='overflow-hidden border-bottom border-secondary'>
            <div className='d-none d-sm-block'>
                <Link to={'/'}>
                    <h2 className='pt-4 pb-3 text-white text-center'><img className='bg-dark p-2 rounded-circle border mx-4' src={logo} alt="logo" width={80} height={80} />{' '}Traveling Assitence</h2>
                </Link>
            </div>
            <div className='d-block d-sm-none'>
                <Link to={'/'}>
                    <h4 className='pt-4 pb-3 text-white text-center'><img src={logo} alt="logo" />{' '}Traveling Assitence</h4>
                </Link>
            </div>
        </div>
    )
}

export default Index