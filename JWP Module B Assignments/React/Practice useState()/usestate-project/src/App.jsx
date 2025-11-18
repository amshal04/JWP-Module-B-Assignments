// import React, {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Input from './Components/InputField/Input';

// const App = () => {

//   let [name, setName] = useState("");
//   let [username, setUsername] = useState("");
//   let [email, setEmail] = useState("");
//   let [city, setCity] = useState("");

//   const handleSubmit = () => {
//     console.log(name, username, email, city);
    
//   };

//   return (
//     <>
//      <h1>App</h1>

//       <Input Textvalue={(e) => setName(e.target.value)}
//       label="Enter your full name"/>

//       <Input Textvalue={(e) => setUsername(e.target.value)}
//       label="Enter username"/>

//       <Input Textvalue={(e) => setEmail(e.target.value)}
//       label="Enter email"/>

//       <Input Textvalue={(e) => setCity(e.target.value)}
//       label="Enter your city"/>

//       <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
//     </>
//   )
// }

// export default App








import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Components/InputField/Input';
import Table from 'react-bootstrap/Table';

const App = () => {

  let [register, setRegister] = useState({
    fullName : "",
    userName : "",
    email : "",
    city : "",

  })

  const [records, setRecords] = useState([]);

  const handleSubmit = () => {
    setRecords([...records, register])
  }
  console.log(records);
  
  return (
    //setName(e.target.value) ye bhi tariqa hy solve karny ka or setRegister ka bhi hy or records mai previous data records rahe ga or ye table mai show karygy or (...spread operator hy) ye copy ky liye use hota hy issy overwrite nhi hogi value map value ko return karta hy

    <>
      <Input
       valueKey={register.fullName}
       Textvalue = {(e) => {
        setRegister({...register, fullName: e.target.value});
       }}
      label ="Enter full name" />

      <Input
       valueKey={register.userName}
       Textvalue = {(e) => {
        setRegister({...register, userName: e.target.value});
       }}
      label ="Enter username" />

      <Input
       valueKey={register.email}
       Textvalue = {(e) => {
        setRegister({...register, email: e.target.value});
       }}
      label ="Enter email" />

      <Input
       valueKey={register.city}
       Textvalue = {(e) => {
        setRegister({...register, city: e.target.value});
       }}
      label ="Enter city" />

      <button onClick={handleSubmit} className="btn btn-success ms-5">Submit</button>

       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
       {records.map((e,i) => {
        return (
          <tr key={i}>
            <td>{e.fullName}</td>
            <td>{e.userName}</td>
            <td>{e.email}</td>
            <td>{e.city}</td>

          </tr>
        );
       })}
      </tbody>
    </Table>
    </>
  );
};

export default App;

