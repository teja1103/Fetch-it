import React from 'react'

const Users = ({loading,users}) => {
    return loading ? (   
        <div className="content">
       <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    
        ) : 
        (
          <div id="main">
    
          {users.map(user =>
                      <div className="project column3">
                        {/* {
                          console.log(user)
                        } */}
                        <div className="card" >
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;