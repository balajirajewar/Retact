import React from "react";
import userData from "./Users-list";
import { useNavigate   } from "react-router-dom";

function Home()
{
  const navigate = useNavigate();
    const profile = userData.filter( userdetails =>( 
        userdetails.id === 'user-2'
        )
    )

   const  navigateToUser= ()=>{
    navigate('/Users')
   } 

    return(
        <div className="home-wrapper">
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
            profile.map((users)=>(
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

      <button className="btn" onClick={navigateToUser}>Users</button>

        </div>
    );

}
export default Home;