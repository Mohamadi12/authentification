import React from 'react'

const User = ({auth,logout}) => {
  return (
    <div>
       <div>
      <br/>
      <br/>
      <div className=" d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <div className="text-center">
                    <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle"/>
                </div>
                
                <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                    <h5 className="mt-2 mb-0">{auth.name}</h5>
                    <span>UI/UX Designer</span> <br/>
                    <h4>email</h4>
                    <span>{auth.email}</span>
                    <div class="px-4 mt-1">
                        <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>
                    <div class="buttons">
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default User

