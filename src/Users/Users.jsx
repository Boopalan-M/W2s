import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Common/UserContext';

function Users(props) {

const data = useContext(UserContext)

    return (
        <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link to ="/User-create/" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
        class="fas fa-download fa-sm text-white-50"></i> Add User</Link>
    </div>   

            <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">UserList</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                            <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Action</th>
                               
                            </tr>
                        </thead>
                                             <tbody>
                         
                           {data.userdata.map((data,index) =>(
                            <tr>
                            <td>{index+1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.mobile}</td>
                            <td>{data.adress}</td>
                             {index!=0?<td><Link to = "User-edit/1">Edit</Link></td>:<Link to = "User-edit/1">Edit</Link>}
                        </tr>
                           ))}
                           
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

            
        </div>
    );
}

export default Users;