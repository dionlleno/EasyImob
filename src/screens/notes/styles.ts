import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA', // Corrigido
        padding: 10,
        gap: 10,
    },
    titleLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00A7F8',
    },
    titleBox: {
        backgroundColor: '#FFF',
        padding: 4,
        borderRadius: 10,
    },
    titleText: {
        fontSize: 16,
        color: '#000',
    },
    contentLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00A7F8',
    },
    contentBox: {
        flex: 1,
        fontSize: 16,
        backgroundColor: '#FFF',
        padding: 4,
        borderRadius: 10,
        marginBottom: 10,
    },
    contentText: {
        fontSize: 16,
        color: '#000',
    },
    dateLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00A7F8',
    },
    dateBox: {
        fontSize: 16,
        backgroundColor: '#FFF',
        padding: 4,
        borderRadius: 10,
    },
    dateText: {
        fontSize: 16,
        color: '#000',
    },
});

export default styles;
