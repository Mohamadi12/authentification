import React from 'react'
import './Navbar.css';

const Navbar = ({auth,logout}) => {
  console.log('Verifie',auth)
  return (
    <div>
      <nav className='navMenu'>
        <a>{auth.name}</a>
        {
          auth.role==='admin'? (<>
                  <a>HomePage</a>
                  <a>Profil</a>
                  <a>Statistique</a>
              </>):(<>
                <a>HomePage user</a>
                <a>user Profil</a>
               <a>ContactList</a>
                <a>add contactList</a>
              </>)
        }
        <button onClick={()=>logout()}>Logout</button>
      </nav>
    </div>
  )
}

export default Navbar

