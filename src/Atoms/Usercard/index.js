
export const UserCard = ({image, fullName})=>{
    return(
        <div className="userdisplay">
             <img src={image} alt={`${fullName} profile`}/>
            <h3>{fullName}</h3>
        </div>
    )
};

export const sinlgeUserCard = ({image, fullName})=>{
    return(
        <div className="userdisplay">
            <img src={image} alt={`${fullName} profile`}/>
            <h3>{fullName}</h3>
        </div>
    )
};
export default UserCard;