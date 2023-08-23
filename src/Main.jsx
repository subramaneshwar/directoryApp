import React, { useEffect, useState } from 'react'
import './main.css'
export function getDataFromLS() {
    const data = localStorage.getItem('person-data');
    if (data) {
        return JSON.parse(data)
    } else {
        return []
    }
}
function Main() {
    const [Data, setData] = useState([])
    const [personData, setPersonData] = useState({
        name: '',
        dob: '',
        aadhar: '',
        mobile: '',
        age:'null'
    });
    const [peopleList, setPeopleList] = useState([]);
    const [show, setshow] = useState(false)
    const [lSPersonData, setLSPersonData] = useState(() => {
        return getDataFromLS();
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if(name === "dob"){

            setPersonData((prevData) => ({
                ...prevData,
                [name]: value,
                ["age"]:calculateAge(value)
            })); 
        }
        else{

            setPersonData((prevData) => ({
                ...prevData,
                [name]: value,
            }));

        }
    };
   console.log(personData);
    const handleAddPerson = () => {
        const { name, dob, aadhar, mobile } = personData;

        if (!name || !dob || !aadhar || !mobile) {
            alert('All fields are required.');
            return;
        }

        if (aadhar.length !== 12) {
            alert('Aadhar Number should be 12 digits.');
            return;
        }

        if (mobile.length !== 10) {
            alert('Mobile Number should be 10 digits.');
            return;
        }

        const newPerson = {
            Name: name,
            "Date of Birth": dob,
            "Aadhar Number": aadhar,
            "Mobile Number": mobile,
            Age: calculateAge(dob)
        };

        const personDataLS = localStorage.getItem("person-data");
        if (personDataLS) {
            const parsedata = JSON.parse(personDataLS)
            const personar = [...parsedata, newPerson];
            localStorage.setItem("person-data", JSON.stringify(personar));
            setLSPersonData(personar)
        }
        else {
            const newArr = [newPerson];
            localStorage.setItem("person-data", JSON.stringify(newArr));
            setLSPersonData(newArr)
        }
        setshow(!show)
        setPersonData({
            name: '',
            dob: '',
            aadhar: '',
            mobile: ''
        });
        // handleSavePerson()


    };
    // console.log(Data)
    const handleDeletePerson = (index) => {
        const data = getDataFromLS();

        const updatedData = data.filter(
            (item, ind) => ind !== index
        );

        localStorage.setItem("person-data", JSON.stringify(updatedData));
        setLSPersonData(updatedData);
    };
    const remove = () => {
        setPersonData({
            name: '',
            dob: '',
            aadhar: '',
            mobile: ''
        });
        setshow(!show)

    }
    function calculateAge  (dob)  {
        const dobDate = new Date(dob);
        const today = new Date();
        const yearsDiff = today.getFullYear() - dobDate.getFullYear();
        const monthsDiff = today.getMonth() - dobDate.getMonth();
        if (monthsDiff < 0 || (monthsDiff === 0 && today.getDate() < dobDate.getDate())) {
            return yearsDiff - 1; // Subtract 1 year if birthday hasn't occurred yet this year
        }

        return yearsDiff;
    };

    return (
        <div>
            <div style={{ border: '2px solid', margin: '20px 100px', height: '400px'}}>
                <div>

                    <p style={{ border: 'solid', borderWidth: '0px 1px 1px 0px', width: '200px', padding: '.5rem 1.5rem' }} >Add New Person</p>
                </div>
                <div style={{overflowY:'scroll',height:'90%'}}>

                <table className='tables'  >
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Aadhar Number</th>
                        <th>Mobile Number</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    <tr>

                    </tr>
                    <tbody >

                        {lSPersonData.map((person, index) => (
                            <tr key={index}>
                                <td>{person.Name}</td>
                                <td>{person["Date of Birth"]}</td>
                                <td>{person["Aadhar Number"]}</td>
                                <td>{person["Mobile Number"]}</td>
                                <td>{person.Age}</td>
                                <td style={{  cursor: 'pointer',display:'flex',alignItems:'center',justifyContent:'center' }}>

                                    <button style={{ border: 'none', outline: 'none', background: 'inherit', cursor: 'pointer' }} onClick={() => handleDeletePerson(index)}><svg style={{ width: '25px', height: '25px' }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4d72be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 7l16 0" />
                                        <path d="M10 11l0 6" />
                                        <path d="M14 11l0 6" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg></button>
                                </td>
                            </tr>
                        ))}

                        {
                            show && (
                                <tr>
                                    <td><input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={personData.name}
                                        onChange={handleInputChange}
                                    /></td>
                                    <td> <input
                                        type="date"
                                        placeholder="Date of Birth"
                                        name="dob"
                                        value={personData.dob}
                                        onChange={handleInputChange}
                                    /></td>
                                    <td><input
                                        type="text"
                                        placeholder="Aadhar Number"
                                        name="aadhar"
                                        value={personData.aadhar}
                                        onChange={handleInputChange}
                                    /></td>
                                    <td><input
                                        type="text"
                                        placeholder="Mobile Number"
                                        name="mobile"
                                        value={personData.mobile}
                                        onChange={handleInputChange}
                                    /></td>
                                    <td>{personData.age ? personData.age : 0}</td>
                                    <td style={{display:'flex',alignItems:'center',justifyContent:'center'}}> <button style={{ border: 'none', outline: 'none', background: 'inherit' }} onClick={handleAddPerson}><svg style={{ width: '25px', height: '25px', cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-floppy" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4d72be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                        <path d="M14 4l0 4l-6 0l0 -4" />
                                    </svg></button>
                                        <button style={{ border: 'none', outline: 'none', background: 'inherit', cursor: 'pointer' }} onClick={remove}><svg style={{ width: '25px', height: '25px' }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4d72be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M4 7l16 0" />
                                            <path d="M10 11l0 6" />
                                            <path d="M14 11l0 6" />
                                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                        </svg></button>
                                    </td>
                                    {/* <td></td> */}

                                </tr>

                            )


                        }
                    </tbody>
                </table>
                </div>

            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', margin: '10px 100px' }}>
                <button style={!show ? { padding: '1rem', cursor: 'pointer', background: '#4d72be', color: 'white', border: 'none', borderRadius: '20px' } : { padding: '1rem', cursor: 'pointer', background: '#4d72be', color: 'white', border: 'none', borderRadius: '20px', display: 'none' }} onClick={() => setshow(!show)}>Add New Person</button>
            </div>
        </div>
    )
}

export default Main