import React, {useRef, useCallback, useContext, useState, useEffect} from 'react';
import { MdDateRange, MdLocalHospital, MdAccountBox } from 'react-icons/md';
import logoImg from '../../assets/logo.png';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import {AuthContext} from '../../hooks/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background, Logo, Container2, Combobox } from './styles';
import api from '../../services/api';

interface Cadastro {
    id: string;
    data: string;
    nomePaciente: string;
    nomeMedico: string;
    especialidade: string;
    horario: string;
}

interface Medico {
    id: string;
    nome: string;
    especialidade: string;
}

interface Paciente {
    id: string;
    nome: string;
}


const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { cadastroConsulta } = useContext(AuthContext);

    const handleAddSubmit = useCallback(async (data: Cadastro) => {
      try {
          // eslint-disable-next-line
          formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          data: Yup.date().required('Data obrigatória'),
          nomePaciente: Yup.string().required('Id obrigatório'),
          nomeMedico: Yup.string().required('Id obrigatório'),
          horario: Yup.string().required('Horário obrigatório'),

        });

        await schema.validate(data, {
          abortEarly: false,
        });

        cadastroConsulta({
          data: data.data,
          nomePaciente: data.nomePaciente,
          nomeMedico: data.nomeMedico,
          horario: data.horario,
        });

      } catch (error) {
        if (error instanceof Yup.ValidationError)
       {
        const errors = getValidationErrors(error);
        // eslint-disable-next-line
        formRef.current?.setErrors(errors);}
       }

    }, [cadastroConsulta]);

    const [agendamentos, setConsultas] = useState<Cadastro[]>([]);
        const [medicos, setMedicos] = useState<Medico[]>([]);
        const [pacientes, setPacientes] = useState<Paciente[]>([]);

        useEffect(() => {
            api.get('agendamentos').then(response => {
                setConsultas(response.data);
            });
            api.get('medicos').then(response => {
                setMedicos(response.data);
            });
            api.get('pacientes').then(response => {
                setPacientes(response.data);
            });
        });

        async function handleDelete(id: string) {
            await api.delete('agendamentos/' + id);
            setConsultas(agendamentos.filter(agendamento => agendamento.id !== id));
        }

    return (
    <Background>
    <Container>
        <Content>
            <Logo>
            <img src={logoImg} width="270"  alt="logo"/>
            </Logo>
        <Form id="teste" ref={formRef} onSubmit={handleAddSubmit}>
            <h1>Cadastro de Consultas</h1>

            <Input name="data" icon={MdDateRange} type="Date" placeholder="Data" />
            <Input name="nomePaciente" icon={MdAccountBox } placeholder="Nome do Paciente" />
            {/* <Combobox>
            <select >
            {pacientes.map(x =>
            <option key={x.id}>{x.nome}</option>
            )}
            </select>
            </Combobox> */}
            <Input name="nomeMedico" icon={MdLocalHospital} placeholder="Nome do Médico" />
        <Input name="horario" icon={MdDateRange} type="Time" pattern="[0-9]{2}:[0-9]{2}" />
            <span className="validacao"></span>

            <Button type="submit">Cadastrar</Button>
        </Form>
        </Content>

    </Container>
    <Container2>
        <h1>Consultas Agendadas</h1>
        <div>
            {agendamentos.map(x =>
            <div>
            <div key={x.id}>
                <p>Data: {x.data}</p>
                <p>Nome do Paciente: {x.nomePaciente}</p>
                <p>Nome do Médico: {x.nomeMedico}</p>
                <p>Especialidade: {x.especialidade}</p>
                <p>Horário: {x.horario}</p>

            </div>
            <button onClick={() => handleDelete(x.id)}>Excluir</button>
            </div>
            )
            }
            </div>
    </Container2>
    </Background>

    );
};

export default SignIn;