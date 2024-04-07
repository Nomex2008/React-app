import { useTypedSelector } from "../hooks/useTypesSelector";

const UserList: React.FC = () => {
    const {users,error, loading} = useTypedSelector(state => state.user)
    return ( 
        <div></div>
     );
}
 
export default UserList;