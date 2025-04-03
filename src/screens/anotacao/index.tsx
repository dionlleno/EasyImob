import React, { useState } from 'react';
import { Text, View, ScrollView, Button, TextInput, Modal, TouchableOpacity } from 'react-native';

import styles from './styles';
import { Anotacao } from '../../models/anotacao';

export default function ScreenAnotacao() {

    const [text, setText] = useState('');
    const [modalVisiblePesquisa, setModalVisiblePesquisa] = useState(false);
    const [modalVisibleAdicionar, setModalVisibleAdicionar] = useState(false);

    function searchPress() {
        alert('Função de pesquisa aqui');
    }

    const anotacao = new Anotacao(
        1,
        "Título da Nota",
        "Conteúdo da Nota. A vida é repleta de momentos que nos ensinam valiosas lições. (...) No fim, cada pessoa tem sua própria definição de felicidade e realização.",
        "10/10/2020",
        "15/05/2023"
    );

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisiblePesquisa}
                onRequestClose={() => setModalVisiblePesquisa(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Nova Anotação</Text>
                        <TextInput style={styles.modalInput} placeholder="PESQUISAR" />
                        <TextInput style={styles.modalInput} placeholder="Digite o conteúdo" multiline />
                        
                        <View style={styles.buttonBar}>
                            <Button title="Salvar" onPress={() => setModalVisiblePesquisa(false)} />
                            <Button title="Cancelar" onPress={() => setModalVisiblePesquisa(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleAdicionar}
                onRequestClose={() => setModalVisibleAdicionar(false)}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Nova Anotação</Text>
                        <TextInput style={styles.modalInput} placeholder="ADICIONAR" />
                        <TextInput style={styles.modalInput} placeholder="Digite o conteúdo" multiline />
                        
                        <View style={styles.buttonBar}>
                            <Button title="Salvar" onPress={() => setModalVisibleAdicionar(false)} />
                            <Button title="Cancelar" onPress={() => setModalVisibleAdicionar(false)} />
                        </View>
                    </View>
                </View>
            </Modal>

            {/* CAMPOS E BOTÕES PRINCIPAIS */}
            <View style={styles.buttonBar}>
                <Text style={styles.labelSearch}>Data:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Digite a data"
                />
                <View style={styles.button}>
                    <Button title="Pesquisar" onPress={() => setModalVisiblePesquisa(true)} />
                </View>
                <View style={styles.button}>
                    <Button title="Adicionar" onPress={() => setModalVisibleAdicionar(true)} />
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>Título:</Text>
                <Text style={styles.value}>{anotacao.getTitulo()}</Text>

                <Text style={styles.label}>Data de Criação:</Text>
                <Text style={styles.value}>{anotacao.getDataCadastro()}</Text>

                <Text style={styles.label}>Conteúdo:</Text>
                <Text style={styles.value}>{anotacao.getConteudo()}</Text>
            </ScrollView>

            <View style={styles.buttonBar}>
                <Button title="Alterar" onPress={() => setModalVisible(true)} />
            </View>
        </View>
    );
}
