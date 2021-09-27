import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Col, Row } from "reactstrap";
import UserContext from "../Common/UserContext";

function Usercreate(props) {

const [name,Setname] = useState("")
const [email,Setemail] = useState("")
const [mobile,Setmobile] = useState("")
const [adress,Setadress] = useState("")

const data = useContext(UserContext)
let history = useHistory()
let handleSubmit = ()=>{
   
    console.log({name,email,mobile,adress})
    data.Setuserdata([...data.userdata,{
        name,email,mobile,adress
    }])
    console.log(data.userdata)
    history.push("/user")
}
 let handleCancel = ()=>{
    history.push("/user")
 }

  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">UserCreate</h1>
      </div>
      <div className="container">
        
          
          <Row>
            <Col md={6}>
              <label>UserName</label>
              <input type="text" name="name" value={name}  onChange ={(e) =>Setname(e.target.value)} className="form-control" />{" "}
              </Col>
            <Col md={6}>
              <label>Email</label>
              <input type="text" name="email" value={email}  onChange ={(e) =>Setemail(e.target.value)} className="form-control" />
              </Col>
       </Row>
       <Row>
       <Col md={6}>
         <label>Mobile</label>
         <input type="text" name="mobile"  value={mobile} onChange ={(e) =>Setmobile(e.target.value)} className="form-control" />{" "}
         </Col>
         <Col md={6}>
         <label>Address</label>
         <input type="text" name="adress" value={adress} onChange ={(e) =>Setadress(e.target.value)} className="form-control" />
         </Col>
  </Row>
  <Row mt={4}>
  <Col md={6} mt-4 ml-1 >
    
    <button type="Submit" name="mobile" className="btn btn-primary"  onClick = {handleSubmit}>Submit</button>
    <button type="Submit" name="mobile" className="btn btn-danger"  onClick = {handleCancel}>Cancel</button>
    </Col>
  
  
</Row>
      
      </div>
    </div>
  );
}

export default Usercreate;
