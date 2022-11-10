import React, { useState } from 'react'

const Home = () => {

    const [values, setvalues] = useState(
        {
            category: "",
            expense: 0
        }
    )

    const [data, setdata] = useState([])

    const handleChange = (e) => {
        setvalues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       // const newdata = {...values, [data.category]:values.category, [data.expense]:values.expense}
        setdata([...data, values]);
        console.log(data);
        console.log(values,"val")
    }

    return (
        <>
            <div className='container my-3'>
                <form onSubmit={handleSubmit}>
                    <label>Enter category</label>
                    <input className='mx-2 my-3' name='category' onChange={handleChange} value={values.category} /><br />
                    <label>Enter expense</label>
                    <input className='mx-2 my-3' name='expense' onChange={handleChange} value={values.expense} />

                    <button className='btn btn-primary' type='submit' >Add</button>
                </form>

            </div>
        </>
    )
}

export default Home