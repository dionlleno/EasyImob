import { Text, View, ScrollView } from 'react-native';

import styles from './styles';

export default function ScreenAnotacao() {
    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.title}>Anotação</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.label}>Título:</Text>
                <Text style={styles.value}>Título da nota</Text>
                <Text style={styles.label}>Data de Criação:</Text>
                <Text style={styles.value}>Data de criação da nota</Text>
                <Text style={styles.label}>Conteúdo:</Text>
                <View style={styles.value}>
                    <Text style={styles.value}>Conteúdo da nota</Text>
                </View>
            </ScrollView>
        </View>
    );
}
