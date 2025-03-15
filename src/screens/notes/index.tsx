import { Text, View } from 'react-native';

import styles from './styles';

export default function ScreenNotes() {
    return (
        <View style={styles.container}>
        <Text style={styles.titleLabel}>Título:</Text>
        <View style={styles.titleBox}>
            <Text style={styles.titleText}>Título da nota</Text>
        </View>
        <Text style={styles.dateLabel}>Data de Criação:</Text>
        <View style={styles.dateBox}>
            <Text style={styles.dateText}>Data de criação da nota</Text>
        </View>
        <Text style={styles.contentLabel}>Conteúdo:</Text>
        <View style={styles.contentBox}>
            <Text style={styles.contentText}>Conteúdo da nota</Text>
        </View>
        </View>
    );
}
