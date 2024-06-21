import "./index.css"
import { useGetSingleUser } from "./utils"
import { sinlgeUserCard } from "../../Atoms/Usercard";


export const SingleUser= ()=> {
    const {users, loading, errors} = useGetSingleUser();
    console.log({users});
    return(
        <div>
        <div>
        <button type="submit" className="loginbutton">login</button>
        </div>

        <div className="display">
            {loading && <h2>Loading users ...</h2>}
            {errors.length>0 && <h2>{errors}</h2>}
            {users.length >0 
            ?users.map((user)=>(
                <UserCard
                key={user.id}
                image={user.image}
                fullName={`${user.firstName} ${user.lastName}`}
                />
            ))
        :!loading && <h2> Users not found</h2>}
        </div>
        </div>
    )
};

export default SingleUser;