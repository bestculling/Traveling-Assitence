import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { category, province } from '../data/filterExplore'
import { useContext } from 'react';
import { filterContext } from '../context/filterContext';
import { initialState } from '../App';

function Filter() {

    const { provinceState, setProvinceState } = useContext(filterContext)

    const filterProvince = e => {
        const a = initialState.filter(p => p.province === e.target.value)
        setProvinceState(a)
    }
    // const filterArea = e => {
    //     console.log(e.target.value)
    // }

    const filterCategory = e => {
        console.log(e.target.value)
        // if (e.target.checked) {
        //     const a = provinceState.filter(c => c.tag === e.target.value)
        //     setProvinceState(a)
        // } else {
        //     setProvinceState(temp)
        // }
    }

    return (
        <div style={{ width: "250px" }} className='overflow-auto rounded bg-white'>
            <Container>
                <div className="my-3 filter__header">
                    จังหวัด
                </div>
                <Form.Select onChange={filterProvince} aria-label="Default select example">
                    {
                        province.map((p, i) => (
                            <option key={i} value={p}>{p}</option>
                        ))
                    }
                </Form.Select>
                {/* <div className="my-3 filter__header">
                    ภูมิภาค
                </div>
                <Form.Select onChange={filterArea} aria-label="Default select example">
                    <option value={`กลาง`}>ภาคกลาง</option>
                    <option value={`เหนือ`}>ภาคเหนือ</option>
                    <option value={`ใต้`}>ภาคใต้</option>
                    <option value={`ออก`}>ภาคตะวันออก</option>
                    <option value={`ตก`}>ภาคตะวันตก</option>
                </Form.Select> */}
                <div className="my-3 filter__header">
                    ประเภทสถานที่เที่ยว
                </div>
                <Form onChange={filterCategory}>
                    {/* <Form.Group onChange={filterCategory} className="mb-3" controlId="formBasicCheckbox"> */}
                    {/* {
                        category.map((c, i) => (
                            <Form.Check value={c} className='my-2' key={i} type="radio" label={c} />
                        ))
                    } */}
                    {/* </Form.Group> */}

                    {category.map((c, i) => (
                        <div key={i} className="mb-3">
                            <Form.Check
                                value={c}
                                label={c}
                                name="group1"
                                type="radio"
                            />
                        </div>
                    ))}
                </Form>
            </Container>
        </div>
    )
}

export default Filter