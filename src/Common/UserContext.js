import React, { useState } from "react";

let UserContext = React.createContext();


export default UserContext;

export const UserProvider =({children}) =>{
const [userdata,Setuserdata] = useState([])
    return<UserContext.Provider value ={{userdata,Setuserdata}}>
    {children}
    </UserContext.Provider>
}