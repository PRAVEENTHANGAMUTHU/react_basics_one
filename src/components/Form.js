import React, {useState, useEffect} from 'react'
export default function Form (){
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');

    useEffect(()=>{
        console.log('Use Effect')
    },[])
    
    function submitedData(){
        console.log(`First Name: ${firstName} Last Name: ${lastName}`)
    }
    
    return(
        <div className="forms">
            <form className="form">
                <div className="form-input">
                    <label>First Name</label>
                    <input
                    value={firstName}
                    onChange={(event)=>setFirstName(event.target.value)}
                    placeholder="Enter your First Name"
                    type='text'
                     />
                </div>
                <br />
                <div className="form-input">
                    <label>Last Name</label>
                    <input
                    value={lastName}
                    placeholder="Enter your Last Name"
                    type='text'
                    onChange={(event)=>setLastName(event.target.value)}
                     />
                </div>
                <p onClick={submitedData} className='submit-btn'>Submit</p>
            </form>
        </div>
    )
}