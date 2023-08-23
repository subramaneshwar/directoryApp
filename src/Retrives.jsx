import React, { useEffect, useState } from 'react'
import { getDataFromLS } from './Main'

function Retrives() {
    const [inp, setinp] = useState("")
    const [persondata, setpersondata] = useState([])
    const [isFindClicked, setisFindClicked] = useState(false)

    const handleInput = (e) =>{
        setinp(e.target.value)
        setisFindClicked(false)
    } 
    const handle = ()=>{
      const data = getDataFromLS();
      const updatedata = data.filter((items)=>items["Aadhar Number"] === inp
      )
      setisFindClicked(true)
      setpersondata(updatedata)
    }
    console.log(persondata);
   
  return (
    <div style={{ border: '2px solid', margin: '20px 100px', height: '' }}>
            <div>

                <p style={{ border: 'solid', borderWidth: '0px 1px 1px 0px', width: '200px', padding: '.5rem 1.5rem' }} >Retrive information</p>
            </div>
            <div style={{padding:'20px',display:'flex',gap:'20px'}}>
                <input type="text" style={{padding:'.5rem',fontSize:"1.2rem"}} 
            // value={retrieveAadhar}
            onChange={handleInput}
            placeholder="Enter Aadhar Number"/>
                <button style={{padding:'.5rem 1.5rem',color:'white',background:'#4d72be',fontSize:"1.2rem",border:'none',cursor:'pointer'}} onClick={handle}>Find</button>
            </div>
            <div style={{height:'300px' }}>
                {isFindClicked && (persondata.length > 0 ? (
                <div style={{border:'1px  solid',margin:'20px',width:'300px',padding:'20px'}}>
                    <p style={{display:'flex',justifyContent:'space-between'}}>Name : <span   > {persondata[0].Name}</span></p>
                    <p style={{display:'flex',justifyContent:'space-between'}} >Age: <span   >{persondata[0].Age}</span></p>
                    <p style={{display:'flex',justifyContent:'space-between'}} >Aadhar Number : <span   >{persondata[0]["Aadhar Number"]}</span>  </p>
                    <p style={{display:'flex',justifyContent:'space-between'}} >Data of Birth : <span   >{persondata[0]["Date of Birth"]}</span> </p>
                    <p style={{display:'flex',justifyContent:'space-between'}} >Mobile Number : <span   >{persondata[0]["Mobile Number"]}</span> </p>
                </div>) : (<div>

                  <p style={{textAlign:'center'}}>User Not Found, please check aadhar number</p>

                </div> ))}
            </div>
    </div>
  )
}

export default Retrives