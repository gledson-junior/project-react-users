import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Avatar from "../../assets/Avatar.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from '../../assets/Trash.svg';
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens';
import Button from  '../../components/Button'
import { Container, Image, User } from './styles';




function Users() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchUsers() {
            const { data: listUsers } = await axios.get("http://localhost:3001/users")
            setUsers(listUsers)
        }
        fetchUsers()
    }, [users])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUser = users.filter((user) => user.id !== userId)

        setUsers(newUser)
        
    }

    function myHistory(){
        navigate('/')
    }
    return (
        <Container>

            <Image alt='Logo-image' src={Avatar} />

            <ContainerItens isBlur={true}>

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

                <Button Back={true} onClick={myHistory}><img alt="seta" src={Arrow} /> Voltar </Button>

            </ContainerItens>
        </Container>
    );

}

export default Users;