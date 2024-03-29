import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import People from "../../assets/Peoples.svg";
import Arrow from "../../assets/Arrow.svg";
import ContainerItens from '../../components/ContainerItens'
import H1 from '../../components/Title'
import Button from '../../components/Button'
import { Container, Image, InputLabel, Input, A} from './styles';




function App() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const InputName = useRef();
    const InputAge = useRef();



    async function AddNewUser() {

        const { data: newUser } = await axios.post('http://localhost:3001/users', {
            name: InputName.current.value,
            age: InputAge.current.value
        });

        setUsers([...users, newUser]);
        navigate('/usuarios');
    }


    return (
        <Container>

            <Image alt='Logo-image' src={People} />

            <ContainerItens>

                <H1>Olá!</H1>

                <InputLabel>Nome:</InputLabel>
                <Input ref={InputName} placeholder='Nome'></Input>

                <InputLabel>Idade:</InputLabel>
                <Input ref={InputAge} placeholder='Idade'></Input>

                <Button onClick={AddNewUser}>Cadastrar<img alt="seta" src={Arrow}></img> </Button>
                <A to='/usuarios'>Lista de Usuários</A>

            </ContainerItens>

        </Container>
    )

}

export default App;