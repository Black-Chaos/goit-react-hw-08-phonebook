import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { selectUser } from "redux/auth/selectors"

export function ProfilePage() {
    const {name, email, avatar} = useSelector(selectUser);

    return <>
        <h2>{name}</h2>
        <p>{email}</p>
        <img src={avatar.includes('gravatar') ? avatar : `http://localhost:3000/${avatar}`} alt="avatar" width={200} height={200}/>
        <Link to='update'>Update</Link>
    </>
}