import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput } from 'react-native';
import { Cliente } from '../../models/cliente';
import styles from './styles';

// Componente que usa a classe Clientes
export default function ScreenCliente() {

    const [Matricula, onChangeTextMatricula] = React.useState('');
    const [Nome, onChangeTextNome] = React.useState('');

    function openPopup(){

    }

    function searchPresse(){
        alert('Função de pesquisa aqui');
    }
  // Criando uma instância de Cliente
    const [cliente] = useState(
        new Cliente(
            1,
            "João da Silva",
            "joao@joao.joao",
            "(11) 98765-4321",
            123.456,
            "ativo",
            "01/01/1980",
            "10/10/2020",
            "15/05/2023"
        )
        )

    const clienteNew = new Cliente()

    return (
        <View style={styles.container}>
            <View style={styles.buttonBar}>
                <Text style={styles.labelSearch}>Matricula:</Text>
                <TextInput style={styles.input} onChangeText={onChangeTextMatricula} value={Matricula} placeholder=""></TextInput>
                <View style={styles.button}>
                    <Button title='BUSCAR' onPress={openPopup}></Button>
                </View>
                <View style={styles.button}>
                    <Button title='ADICIONAR' onPress={searchPresse}></Button>
                </View>

            </View>
            <View style={styles.buttonBar}>
                <Text style={styles.labelSearch}>Nome:</Text>
                <TextInput style={styles.input} onChangeText={onChangeTextNome} value={Nome} placeholder=""></TextInput>
                <View style={styles.button}>
                    <Button title='ATUALIZAR' onPress={openPopup}></Button>
                </View>
                <View style={styles.button}>
                    <Button title='EXCLUIR' onPress={searchPresse}></Button>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{cliente.getNome()}</Text>

                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{cliente.getEmail()}</Text>

                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.value}>{cliente.getTelefone()}</Text>

                <Text style={styles.label}>Data de Nascimento:</Text>
                <Text style={styles.value}>{cliente.getDataContato()}</Text>

                <Text style={styles.label}>Data de Cadastro:</Text>
                <Text style={styles.value}>{cliente.getDataCadastro()}</Text>

                <Text style={styles.label}>Data de Atualização:</Text>
                <Text style={styles.value}>{cliente.getDataAtualizacao()}</Text>

            </ScrollView>
            <Button title="Alterar" onPress={searchPresse} />
        </View>
    );
};