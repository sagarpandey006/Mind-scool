// import React,{useEffect, useState} from "react";

// import axios from "axios";
// import { useParams, Navigate } from "react-router-dom";



// export default function PlacesFormPage(){
//     const {id} = useParams();
//     const [title, setTitle] = useState('');
//     const [address, setAddress] = useState('');
//     const [description, setDescription] = useState('');
//     const [perks, setPerks] = useState([]);
//     const [extraInfo, setExtraInfo] = useState('');
//     const [checkIn, setCheckIn] = useState('');
//     const [checkOut, setCheckOut] = useState('');
//     const [maxGuests, setMaxGuests] = useState(1);
//     const [price,setPrice] = useState(100);
//     const [redirect, setRedirect] = useState(false);

//     useEffect(() => {
//           if(!id){
//              return;
//           }
//           axios.get('/places/'+id).then(response => {
//              const {data} = response;
//              setTitle(data.title);
//              setAddress(data.address);
             
//              setDescription(data.description);
//              setPerks(data.perks);
//              setExtraInfo(data.extraInfo);
//              setCheckIn(data.checkIn);
//              setCheckOut(data.checkOut);
//              setMaxGuests(data.maxGuests);
//              setPrice(data.price);
//           });
//     }, [id]); 




    
//     function inputHeader(text) {
//         return (
//             <h2 className="text-2xl mt-4">{text}</h2>
//         );
//     }

//     function inputDescription(text) {
//         return (
//             <p className="text-gray-500 text-sm">{text}</p>
//         )
//     }

//     function preInput(header, description) {
//         return (
//             <>
//                 {inputHeader(header)}
//                 {inputDescription(description)}

//             </>
//         )
//     }


//     async function savePlace(ev){
         
//         ev.preventDefault();
//         const placeData = {
//             title, address,
//              description, perks, extraInfo,
//              checkIn, checkOut, maxGuests, price,
//         }; 
//         if(id){
//           // update 
//           await axios.put('/places', {
//               id, ...placeData
//           });
//           setRedirect(true);
//         }
//         else{
//             // new place 
//             await axios.post('/places', placeData);
//             setRedirect(true);
//         }
        
        
//      }
//      if(redirect){
//         return <Navigate to={'/account/places'} /> 
//      }
   
     


//      return(
//         <div>
//             {/* <AccountNav /> */}
//                     <form onSubmit={savePlace}>
//                         {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
//                         <input type="text" value={title}
//                             onChange={ev => setTitle(ev.target.value)}
//                             placeholder='title, for example: My lovely apt' />

//                         {preInput('Address', 'Address to this place')}
//                         <input type="text"
//                             value={address}
//                             onChange={ev => setAddress(ev.target.value)}
//                             placeholder='address' />
                        
                    

                        
//                         {preInput('Description', 'description of the place ')}

//                         <textarea
//                             value={description}
//                             onChange={ev => setDescription(ev.target.value)}
//                         />
                        
//                         {preInput('Extra info', 'House rules, etc')}

//                         <textarea
//                             value={extraInfo}
//                             onChange={ev =>
//                                 setExtraInfo(ev.target.value)
//                             }
//                         />
//                         {preInput('Check in&out times', 'add check in and out ')}


//                         <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
//                             <div>
//                                 <h3 className='mt-2 -mb-1'>
//                                     check in time
//                                 </h3>
//                                 <input
//                                     value={checkIn}
//                                     onChange={ev => setCheckIn(ev.target.value)}
//                                     type="text"
//                                     placeholder='14' />

//                             </div>
//                             <div>
//                                 <h3 className='mt-2 -mb-1'>
//                                     check out  time
//                                 </h3>
//                                 <input
//                                     type="text"
//                                     value={checkOut}
//                                     onChange={ev => setCheckOut

//                                         (ev.target.value)
//                                     }
//                                     placeholder='11' />

//                             </div>
//                             <div>
//                                 <h3 className='mt-2 -mb-1'> 
//                                 max number of guests
//                                 </h3>
//                                 <input
//                                     value={maxGuests}
//                                     onChange={ev => setMaxGuests(ev.target.value)}

//                                     type="number"
//                                 />

//                             </div>

//                             <div>
//                                 <h3 className='mt-2 -mb-1'> 
//                                 Price per night 
//                                 </h3>
//                                 <input
//                                 type="number"
//                                     value={price}
//                                     onChange={ev => setPrice(ev.target.value)}

                                    
//                                 />

//                             </div>

//                         </div>

//                         <button className='primary my-4'>Save </button>

//                     </form>
//                 </div>
//      )
// }








import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Navigate } from "react-router-dom";

export default function CriminalFormPage() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [panCard, setPanCard] = useState('');
  const [dob, setDob] = useState('');
  const [crimePlace, setCrimePlace] = useState('');
  const [dateOfCrime, setDateOfCrime] = useState('');
  const [criminalHistory, setCriminalHistory] = useState('No');
  const [timePeriod, setTimePeriod] = useState('');
  const [firNo, setFirNo] = useState('');
  const [bailApplied, setBailApplied] = useState('No');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:8080/api/v1/crime/criminals/${_id}`).then(response => {
      const data = response.data;
      setName(data.name);
      setPhoneNo(data.phoneNo);
      setEmail(data.email);
      setFatherName(data.fatherName);
      setAadharCard(data.aadharCard);
      setPanCard(data.panCard);
      setDob(data.dob);
      setCrimePlace(data.crimePlace);
      setDateOfCrime(data.dateOfCrime);
      setCriminalHistory(data.criminalHistory);
      setTimePeriod(data.timePeriod);
      setFirNo(data.firNo);
      setBailApplied(data.bailApplied);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function saveCriminal(ev) {
    ev.preventDefault();
    const criminalData = {
      name,
      phoneNo,
      email,
      fatherName,
      aadharCard,
      panCard,
      dob,
      crimePlace,
      dateOfCrime,
      criminalHistory,
      timePeriod,
      firNo,
      bailApplied
    };

    if (id) {
      // update
      await axios.put('/criminals', { id, ...criminalData });
      setRedirect(true);
    } else {
      // new criminal
      await axios.post('http://localhost:8080/api/v1/crime/criminals', criminalData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/account/criminals'} />;
  }

  return (
    <div>
      <form onSubmit={saveCriminal}>
        {preInput('Name', 'Name of the criminal')}
        <input
          type="text"
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder='Name' />

        {preInput('Phone Number', 'Contact phone number')}
        <input
          type="text"
          value={phoneNo}
          onChange={ev => setPhoneNo(ev.target.value)}
          placeholder='Phone Number' />

        {preInput('Email', 'Email address')}
        <input
          type="email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
          placeholder='Email' />

        {preInput('Father’s Name', 'Father’s name')}
        <input
          type="text"
          value={fatherName}
          onChange={ev => setFatherName(ev.target.value)}
          placeholder='Father’s Name' />

        {preInput('Aadhar Card', 'Aadhar card number')}
        <input
          type="text"
          value={aadharCard}
          onChange={ev => setAadharCard(ev.target.value)}
          placeholder='Aadhar Card' />

        {preInput('PAN Card', 'PAN card number')}
        <input
          type="text"
          value={panCard}
          onChange={ev => setPanCard(ev.target.value)}
          placeholder='PAN Card' />

        {preInput('Date of Birth', 'Date of Birth')}
        <input
          type="date"
          value={dob}
          onChange={ev => setDob(ev.target.value)}
          placeholder='Date of Birth' />

        {preInput('Crime Place', 'Place where the crime occurred')}
        <input
          type="text"
          value={crimePlace}
          onChange={ev => setCrimePlace(ev.target.value)}
          placeholder='Crime Place' />

        {preInput('Date of Crime', 'Date when the crime occurred')}
        <input
          type="date"
          value={dateOfCrime}
          onChange={ev => setDateOfCrime(ev.target.value)}
          placeholder='Date of Crime' />

        {preInput('Criminal History', 'Do you have a criminal history?')}
        <select
          value={criminalHistory}
          onChange={ev => setCriminalHistory(ev.target.value)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        {criminalHistory === 'Yes' && (
          <>
            {preInput('Time Period', 'Time period of criminal history')}
            <input
              type="text"
              value={timePeriod}
              onChange={ev => setTimePeriod(ev.target.value)}
              placeholder='Time Period' />
          </>
        )}

        {preInput('FIR Number', 'FIR number')}
        <input
          type="text"
          value={firNo}
          onChange={ev => setFirNo(ev.target.value)}
          placeholder='FIR Number' />

        {preInput('Bail Applied', 'Is bail applied on this FIR?')}
        <select
          value={bailApplied}
          onChange={ev => setBailApplied(ev.target.value)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        <button className='primary my-4'>Save</button>
      </form>
    </div>
  );
}
