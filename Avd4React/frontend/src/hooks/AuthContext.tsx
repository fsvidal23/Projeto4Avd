import React, { createContext, useCallback } from 'react';
import api from '../services/api';


interface Cadastro {
    data: string;
    nomePaciente: string;
    nomeMedico: string;
    horario: string;
}

interface Listar {
    id: string;
    data: string;
    nomePaciente: string;
    nomeMedico: string;
    especialidade: string;
    horario: string;
}

interface Medicos {
    id: string;
    nome: string;
    especialidade: string;
}

interface AuthContextData{
    cadastroConsulta(cadastro: Cadastro): Promise<void>;
    listarConsulta(listar: Listar): Promise<void>;
    listarMedicos(listaMedicos: Medicos): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const cadastroConsulta = useCallback(async({data, nomePaciente, nomeMedico, horario}) => {
        const response = await api.post('agendamentos', {
            data,
            nomePaciente,
            nomeMedico,
            horario,
        });

        console.log(response.data);

    }, []);


    const listarConsulta = useCallback(async({ }) => {
        const response = await api.get('agendamentos', {});
        console.log(response.data);

    }, []);

    const listarMedicos = useCallback(async ({ }) => {
            const response = await api.get('medicos', {});
            console.log(response.data);
        }, []);

    return(
    <AuthContext.Provider value={{ cadastroConsulta, listarConsulta, listarMedicos}}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthContext;