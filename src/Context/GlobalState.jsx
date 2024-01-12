import { createContext ,useState} from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({children}) =>{
    const [deger,setDeger] = useState('Huseyn')

    return(
        <GlobalContext.Provider value={{id:1,deger:deger,links:["HomePage","Abot","Contact","Portfolyo"],setDeger}}>
            {children}
        </GlobalContext.Provider>
    )
}