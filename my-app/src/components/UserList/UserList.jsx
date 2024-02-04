//import './userList.module.css';
import { v4 as uuidv4 } from 'uuid';


const UserList = ({ userList }) => {

    return (<>
        {userList.map(el =>
            <h1 key={uuidv4()}>
                {el.firstName}
            </h1>
        )}

    </>);
}

export default UserList;
