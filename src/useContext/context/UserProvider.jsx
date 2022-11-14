import { useState } from "react";
import { UserContext } from "./UserContext"

// const user = {
//   id: 123,
//   name: 'Alejandro Vera Valdés',
//   email: 'alejandro.vera@ugm.cl'
// }

export const UserProvider = ({ children }) => {

  const [ user, setUser ] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
