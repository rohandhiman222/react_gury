import React from 'react';

const UserList = () => {
    return (
        <tr>
        <td>1</td>
        <td><a href="#"><img src="https://picsum.photos/60/60" className="avatar" alt="Avatar" /> Michael Holz</a></td>
        <td>04/10/2013</td>                        
        <td>Admin</td>
        <td><span className="status text-success">&bull;</span> Active</td>
        <td>
            <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
            <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
        </td>
    </tr>
    );
};

export default UserList;