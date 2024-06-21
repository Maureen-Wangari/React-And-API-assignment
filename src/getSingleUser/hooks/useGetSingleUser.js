import { getUsers } from "../utils";
import { useState,useEffect } from "react";

export const useGetSingleUsers =() =>{
    
        // <button type="submit">Login</button>
        
    const [users, setusers] = useState([]);
    const [errors, setErrors] = useState('');
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        const fetchUsers = async()=>{
            try{
                setLoading(true);
                const response = await getUsers();
                setusers(response.users);
                setLoading(false);
            }
            catch (error){
                setLoading(false)
                setErrors(`Error: ${error.message}`)

            }
        }
        fetchUsers();
    },[])
    return{users, loading, errors}
}