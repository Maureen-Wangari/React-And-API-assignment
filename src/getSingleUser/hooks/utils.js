const baseUrl = process.env.REACT_APP_BASE_URL;


const getSingleUser= async()=>{
    try{
        const response = await fetch(`${baseUrl}/users`);
        return response.json();
    }
    catch (error){
        throw new Error(error.message);
    }
}