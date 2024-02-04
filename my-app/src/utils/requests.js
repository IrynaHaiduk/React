
export const fetchUsers = async (setUserList) => {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) throw new Error('Data not found');
        const data = await response.json();
        setUserList(data.users);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchUserById = async (setUser, id) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        //setUserList(data.users);
        setUser(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}


//export async await
//body - object
//get result

export const addUser = async (newUser) => {
    try {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        if (!response.ok) throw new Error("Can't add new user");
console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}




