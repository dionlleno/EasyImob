import { ScrollView, Text, View, Button, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Imovel } from '../../models/imovel';
import { Endereco } from '../../models/endereco';
import { useState } from 'react';

import styles from './styles';
import React from 'react';

export default function ScreenImovel() {
    // Estados para armazenar os valores dos campos
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [isChecked, setChecked] = useState(false);

    function searchPress() {
        alert('Função de pesquisa aqui');
    }

    const endereco = new Endereco(
        1, "12345-678", "Rua das Flores", "123", "Casa",
        "Centro", "São Paulo", "SP", "Brasil"
    );

    const imovel = new Imovel(
        1, 500, 2, 3, 1, "Disponível", 100000, 1000, 10, 2,
        false, true, false, true, true, 100,
        "01/01/1980", "10/10/2020", endereco
    );

    return (
        <View style={styles.container}>
            <View style={styles.buttonBar}>
                <Text style={styles.labelSearch}>Matrícula:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setMatricula}
                    value={matricula}
                    placeholder="Digite a matrícula"
                />
                <View style={styles.button}>
                    <Button title='BUSCAR' onPress={searchPress} />
                </View>
                <View style={styles.button}>
                    <Button title='ADICIONAR' onPress={searchPress} />
                </View>
            </View>

            <View style={styles.buttonBar}>
                <Text style={styles.labelSearch}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholder="Digite o nome"
                />
                <View style={styles.button}>
                    <Button title='ATUALIZAR' onPress={searchPress} />
                </View>
                <View style={styles.button}>
                    <Button title='EXCLUIR' onPress={searchPress} />
                </View>
            </View>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>Área:</Text>
                <Text style={styles.value}>{imovel.getArea()}m²</Text>

                <Text style={styles.label}>Quant. de banheiros:</Text>
                <Text style={styles.value}>{imovel.getQuantBanheiros()}</Text>

                <Text style={styles.label}>Quant. de quartos:</Text>
                <Text style={styles.value}>{imovel.getQuantQuartos()}</Text>

                <Text style={styles.label}>Quant. de suítes:</Text>
                <Text style={styles.value}>{imovel.getQuantSuites()}</Text>

                <Text style={styles.label}>Situação:</Text>
                <Text style={styles.value}>{imovel.getSituacao()}</Text>

                <Text style={styles.label}>Valor total:</Text>
                <Text style={styles.value}>R$ {imovel.getValorTotal()}</Text>

                <Text style={styles.label}>Valor IPTU:</Text>
                <Text style={styles.value}>R$ {imovel.getValorIptu()}</Text>

                <Text style={styles.label}>Comissão:</Text>
                <Text style={styles.value}>{imovel.getValorComissao()}%</Text>

                <Text style={styles.label}>Quant. de andares:</Text>
                <Text style={styles.value}>{imovel.getQuantAndares()}</Text>

                <Text style={styles.label}>Possui:</Text>
                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiGaragem()} onValueChange={() => setChecked(!isChecked)} color={isChecked ? '#00A7F8' : undefined} />
                    <Text style={styles.value}>Garagem</Text>
                </View>

                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiVagaGaragem()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined} />
                    <Text style={styles.value}>Vaga de garagem</Text>
                </View>

                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiElevador()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined} />
                    <Text style={styles.value}>Elevador</Text>
                </View>

                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiPiscina()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined} />
                    <Text style={styles.value}>Piscina</Text>
                </View>

                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiAreaLazer()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined} />
                    <Text style={styles.value}>Área de lazer</Text>
                </View>

                <Text style={styles.label}>Valor condomínio:</Text>
                <Text style={styles.value}>R$ {imovel.getValorCondominio()}</Text>

                <Text style={styles.label}>Data de cadastro:</Text>
                <Text style={styles.value}>{imovel.getDataCadastro()}</Text>
            </ScrollView>

            <Button title="Alterar" onPress={searchPress} />
        </View>
    );
}
