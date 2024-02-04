import { useEffect, useState } from 'react';
import { fetchUserById } from '../../utils/requests';


const SingleUser = () => { 
    const [user, setUser] = useState({});

    useEffect(() => {
        fetchUserById(setUser, 1); 
    }, []);

   
console.log(user);
    return ( <>
    {`${user.firstName} ${user.lastName}`}
   
    </> );
}
 
export default SingleUser;