import AddUser from '../components/AddUser/AddUser';
import UserList from '../components/UserList/UserList';
import { useEffect, useState } from 'react';
import { addUser, fetchUsers } from '../../src/utils/requests';

const Userspage = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchUsers(setUserList);
    }, []);

    const handleAddUser = async (newUser) => {
        const userResponse = await addUser(newUser);
        setUserList([...userList, userResponse]);
    }

    return (
        <main>
            <AddUser handleAddUser={handleAddUser} />
            <UserList userList={userList} />
        </main>
    );
}

export default Userspage;