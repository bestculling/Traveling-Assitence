import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { category, province } from '../data/filterExplore'
import { useContext, useState } from 'react';
import { filterContext } from '../context/filterContext';
import { initialState } from '../App';

function Filter() {

    const { provinceState, setProvinceState } = useContext(filterContext)

    // Tags ทั้งหมด
    const allTag = initialState.map(p => p.tag)
    // ไม่เอา Tag ซ้ำ
    const uniqueTag = allTag.filter((value, index, self) => self.indexOf(value) === index)

    const filterProvince = e => {
        const a = initialState.filter(p => p.province === e.target.value)
        setProvinceState(a)
    }

    const filterCategory = e => {
        const b = initialState.filter(p => p.tag === e.target.value)
        setProvinceState(b)
    }

    return (
        <div style={{ width: "250px" }} className='overflow-auto rounded bg-white'>
            <Container>
                <div className="fw-bold my-3 filter__header">
                    จังหวัด
                </div>
                <Form.Select onChange={filterProvince} aria-label="Default select example">
                    {
                        province.map((p, i) => (
                            <option key={i} value={p}>{p}</option>
                        ))
                    }
                </Form.Select>
                <div className="fw-bold my-3 filter__header">
                    ประเภทสถานที่เที่ยว
                </div>
                <Form onChange={filterCategory}>
                    <div className='row'>
                        {uniqueTag.map((c, i) => (
                            <div key={i} className="mb-1">
                                <Form.Check
                                    value={c}
                                    label={c}
                                    name="group1"
                                    type="radio"
                                />
                            </div>
                        ))}
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Filter