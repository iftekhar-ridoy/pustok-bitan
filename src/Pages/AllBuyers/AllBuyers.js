import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';
import Loader from '../../Shared/Loader/Loader';

const AllBuyers = () => {
    useTitle('All Buyers');
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://pustok-bitan-server.vercel.app/users`);
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDelete = (user) => {
        console.log(user);
        const proceed = window.confirm(`Confirm to Delete User ${user.name} ?`)
        if (proceed) {
            fetch(`https://pustok-bitan-server.vercel.app/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result.deletedCount > 0) {
                        refetch();
                        toast.success(`User ${user.name} is Deleted`);
                    }
                })
        }

    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <h3 className='text-3xl font-semibold mb-5 mx-5'>All Buyers</h3>

            <div className="mx-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, indx) =>
                                    <tr key={user._id}>
                                        <th>{indx + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button
                                                onClick={() => handleDelete(user)}
                                                className='btn btn-xs btn-error'>Delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;