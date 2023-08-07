import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useData } from '../hooks/useData'
import Carousel from 'react-bootstrap/Carousel';
import { Image, Badge } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import Warning from '../components/Warning'

export default function About() {

    const { id } = useParams()
    const data = useData()
    const [idata, setIdata] = useState()
    // รับ url query มาหาชื่อที่ตรงกันกับฐานข้อมูล
    // const singleData = data.filter(d => d.name === id)

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const singleData = data.filter(d => d.name === id)
            setIdata(singleData)
        }, 500); // ล่าช้า 0.5 วินาที

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='overflow-auto' id='root' style={{ background: "#121212" }}>
            <Navbar />
            {
                idata ? (<div style={{ maxWidth: '950px' }} className='mx-5 mx-lg-auto my-5 bg-dark text-white rounded'>
                    {
                        idata.map((s, i) => (
                            <div key={i} className='d-flex gap-4 px-4 py-4'>
                                <div className='w-100'>
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        {
                                            s.image.map((m, i) => (
                                                <Carousel.Item key={i}>
                                                    <Image src={m} width={'100%'} height={400} rounded />
                                                </Carousel.Item>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                                <div className='w-100'>
                                    <p style={{ width: "150px" }} className='text-center border border-success rounded p-1'>{s.province}</p>
                                    <h2>{s.name}</h2>
                                    <p>{s.desc}</p>
                                    <p>ที่อยู่: {s.location}</p>
                                    <p className='d-flex gap-2'>เครดิตข้อมูล: <a href={s.credit} target='_blank'><Badge style={{ maxWidth: "200px" }} className='text-truncate' bg="info">{s.credit}</Badge></a></p>
                                    <p style={{ width: "100px" }} className='text-center border border-secondary rounded p-1'>{s.tag}</p>
                                </div>


                            </div>
                        ))
                    }
                </div>) : (<div className='d-flex justify-content-center align-items-center'>
                    <Warning />
                </div>)
            }
        </div>
    )
}
