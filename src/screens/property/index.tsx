import { Text, View } from 'react-native';

import styles from './styles';

export default function ScreenProperty() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Imoveis</Text>
        </View>
    );
}
