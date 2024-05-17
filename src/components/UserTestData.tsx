// src/UserList.tsx
import React from 'react';
import { useFetchUsers } from '../hooks/useFetchUser';

const UserList: React.FC = () => {
    const { users, usersStatus, error } = useFetchUsers();

    if (usersStatus === 'pending') {
        return <div>Loading...</div>;
    }

    if (usersStatus === 'error' && error) {
        return <div>Error: {error.message}</div>;
    }

    if (!users || !Array.isArray(users)) {
        return <div>Error: Data is not an array</div>;
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.UUID}>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
