import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Avatar from "../../assets/Avatar.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from '../../assets/Trash.svg';

import {
    Container,
    Image,
    H1,
    ContainerItens,
    Button,
    User
} from './styles';




function Users() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        async function fetchUsers() {
            const { data: listUsers } = await axios.get("http://localhost:3001/users")
            setUsers(listUsers)
        }
        fetchUsers()
    }, [])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUser = users.filter((user) => user.id !== userId)

        setUsers(newUser)
    }
    return (
        <Container>

            <Image alt='Logo-image' src={Avatar} />

            <ContainerItens>

                <H1>Usuários</H1>

                <ul>
                    {
                        users.map(user => (
                            <User key={user.id}>
                                <p>{user.name}</p> <p>{user.age}</p>
                                <button onClick={() => deleteUser(user.id)} className='trashButton'><img src={Trash} alt='lata-de-lixo' />   </button>
                            </User>
                        ))}
                </ul>

                <Button><img alt="seta" src={Arrow}> Voltar </img> </Button>

            </ContainerItens>
        </Container>
    );

}

export default Users;