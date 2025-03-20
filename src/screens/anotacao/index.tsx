import { Text, View, ScrollView } from 'react-native';

import styles from './styles';
import { Anotacao } from '../../models/anotacao';
import { useState } from 'react';

export default function ScreenAnotacao() {

    const [ anotacao ] = useState(
        new Anotacao(
            1,
            "Titulo da Nota:",
            "Conteudo da Nota. A vida é repleta de momentos que nos ensinam valiosas lições. Ao longo dos anos, passamos por experiências que nos moldam e nos preparam para os desafios futuros. Algumas dessas experiências são marcantes, outras quase imperceptíveis, mas todas têm um papel fundamental na construção da nossa jornada pessoal. No entanto, há algo que todos nós sabemos: a vida é imprevisível. Às vezes, nos deparamos com situações que não esperávamos, e são essas situações que muitas vezes nos forjam de maneira mais profunda. Ao enfrentar obstáculos, aprendemos a dar mais valor às pequenas vitórias e aos detalhes que compõem nossa existência. Uma conversa simples com um amigo, um sorriso de alguém que acabamos de conhecer, ou até mesmo um momento de tranquilidade ao fim de um dia corrido. Esses pequenos gestos podem ser mais significativos do que imaginamos, pois, no final das contas, são eles que realmente nos sustentam. or outro lado, a busca por sucesso e reconhecimento é uma constante em nossa sociedade. Desde cedo, somos incentivados a alcançar metas e ser cada vez melhores no que fazemos. O desejo de ser bem-sucedido pode nos motivar a dar o nosso melhor, mas também pode nos pressionar e nos fazer questionar nossas escolhas e nossos limites. Em meio a essa busca, é essencial lembrar que o sucesso não é um destino final, mas sim um caminho cheio de aprendizados e evolução contínua. Em algum momento, é necessário parar e refletir sobre nossas conquistas e, mais importante ainda, sobre nossos fracassos. O fracasso, embora doloroso, é uma das experiências mais ricas que podemos viver. Ele nos ensina a ser mais resilientes, a persistir mesmo quando as coisas não saem como esperávamos. A chave está em como reagimos a essas situações adversas. Podemos escolher ficar presos ao passado ou seguir em frente, aprendendo com o que vivemos. No fim, cada pessoa tem sua própria definição de felicidade e realização. Para alguns, isso pode ser alcançar um sonho profissional; para outros, pode ser construir uma família ou encontrar paz interior. O importante é seguir seu próprio caminho, respeitar suas escolhas e entender que a vida é feita de altos e baixos. Não importa o ritmo ou o destino, o que realmente importa é a jornada. ",
            "10/10/2020",
            "15/05/2023"
        )
    )

    const anotacaoNew = new Anotacao()

    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Anotação</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>Título:</Text>
                <Text style={styles.value}>{anotacao.getTitulo()}</Text>
                <Text style={styles.label}>Data de Criação:</Text>
                <Text style={styles.value}>{anotacao.getDataCadastro()}</Text>
                <Text style={styles.label}>Conteúdo:</Text>
                <View style={styles.value}>
                    <Text style={styles.value}>{anotacao.getConteudo()}</Text>
                </View>
            </ScrollView>
        </View>
    );
}
