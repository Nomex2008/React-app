import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { fetchUsers } from "../store/action-creators/ucer";


const UserList = () => {
    const {users,error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return ( 
        <div>
            {users.map(user => 
               <div key={user.id}>{user.name}</div> 
            )}
        </div>
     );
}
 
export default UserList;