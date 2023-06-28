import React from "react";
import { useParams } from "react-router-dom";
import userData from "./Users-list";
function UserProfile()
{
const {id}= useParams();

// const profile = userData.filter( userdetails =>( 
//     userdetails.id === id
//     )
// )
    return(
        <div>
        <div>User Profile {id}</div>



        <div className="user-list">
            <table >
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Profile Image</th>
                <th>Phone</th>
                <th>Email</th>
                </tr>
        {   
            userData.filter((users)=>users.id ===id).map((users)=>(
             <tr>
            <td>
               {/* <Link to="/UserProfile$"> {users.id}</Link>  */}
               {users.id}
           
                
                 
                 </td>
              <td>{users.name}</td>
              <td>
                <img src={users.imgURL}/></td>
              <td>{users.phone}</td> 
              <td>{users.email}</td>
             
              </tr>
            )
            )
          }
          </table>
      </div>
        </div>
    )
}
export default UserProfile