import { ScrollView, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Imovel } from '../../models/imovel';
import { Endereco } from '../../models/endereco';
import { useState } from 'react';

import styles from './styles';

export default function ScreenImovel() {

    const [isChecked, setChecked] = useState(false);

    const endereco = new Endereco(
        1,
        "12345-678",
        "Rua das Flores",
        "123",
        "Casa",
        "Centro",
        "São Paulo",
        "SP",
        "Brasil"
    );
    const imovel = new Imovel(
        1,
        500,
        2,
        3,
        1,
        "Disponível",
        100000,
        1000,
        10,
        2,
        false,
        true,
        false,
        true,
        true,
        100,
        "01/01/1980",
        "10/10/2020",
        endereco
    )

    const imovelNew = new Imovel()

    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Informaçõe do Imovel</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>Area:</Text>
                <Text style={styles.value}>{imovel.getArea()}m²</Text>
                <Text style={styles.label}>Quant. de banheiros:</Text>
                <Text style={styles.value}>{imovel.getQuantBanheiros()}</Text>
                <Text style={styles.label}>Quant. de quartos:</Text>
                <Text style={styles.value}>{imovel.getQuantQuartos()}</Text>
                <Text style={styles.label}>Quant. de suites:</Text>
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
                    <Checkbox value={imovel.getPossuiGaragem()} onValueChange={() => {imovel.setPossuiGaragem(!!imovel.getPossuiGaragem())}} color={isChecked ? '#00A7F8' : undefined}/>
                    <Text style={styles.value}>Garagem</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiVagaGaragem()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined}/>
                    <Text style={styles.value}>Vaga de garagem</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiElevador()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined}/>
                    <Text style={styles.value}>Elevador</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiPiscina()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined}/>
                    <Text style={styles.value}>Piscina</Text>
                </View>
                <View style={styles.section}>
                    <Checkbox value={imovel.getPossuiAreaLazer()} onValueChange={setChecked} color={isChecked ? '#00A7F8' : undefined}/>
                    <Text style={styles.value}>Area de lazer</Text>
                </View>
                <Text style={styles.label}>Valor condominio:</Text>
                <Text style={styles.value}>R$ {imovel.getValorCondominio()}</Text>
                <Text style={styles.label}>Data de cadastro:</Text>
                <Text style={styles.value}>{imovel.getDataCadastro()}</Text>

            </ScrollView>
        </View>
    );
}
