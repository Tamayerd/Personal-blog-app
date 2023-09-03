import { createContext, useState} from "react";

export const Authority = createContext();

export default function AuthProvider(props ) {
  const [user, setUser] = useState(null);

  


  return (
    <>
      <Authority.Provider value={{ user, setUser }}>
        {props.children}
      </Authority.Provider>
    </>
  );
}