// index.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Customer } from '../../models/customer';
import styles from './styles';

// Componente que usa a classe Clientes
export default function ScreenCustomer() {
  // Criando uma instância de Cliente
    const [customer] = useState(
        new Customer(
            'João da Silva', 'joao@exemplo.com', '(11) 98765-4321', '123.456.789-00', 
            'Rua das Flores, 123', 'São Paulo', 'SP', '01234-567', '01/01/1980', 
            '10/10/2020', '15/05/2023'
        )
);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Informações do Cliente</Text>
        <View style={styles.infoContainer}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{customer.getNome()}</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{customer.getEmail()}</Text>

            <Text style={styles.label}>Telefone:</Text>
            <Text style={styles.value}>{customer.getTelefone()}</Text>

            <Text style={styles.label}>CPF:</Text>
            <Text style={styles.value}>{customer.getCpf()}</Text>

            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>{customer.getEndereco()}</Text>

            <Text style={styles.label}>Cidade:</Text>
            <Text style={styles.value}>{customer.getCidade()}</Text>

            <Text style={styles.label}>Estado:</Text>
            <Text style={styles.value}>{customer.getEstado()}</Text>

            <Text style={styles.label}>CEP:</Text>
            <Text style={styles.value}>{customer.getCep()}</Text>

            <Text style={styles.label}>Data de Nascimento:</Text>
            <Text style={styles.value}>{customer.getDataNascimento()}</Text>

            <Text style={styles.label}>Data de Cadastro:</Text>
            <Text style={styles.value}>{customer.getDataCadastro()}</Text>

            <Text style={styles.label}>Data de Atualização:</Text>
            <Text style={styles.value}>{customer.getDataAtualizacao()}</Text>

            <Button title="Alterar Dados" onPress={() => alert('Função de alterar dados aqui')} />
        </View>
        </View>
    );
};
