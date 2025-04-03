import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#FFFFFF',
        gap: 10,
    },
    header:{
        width: "100%",
        height: 25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00A7F8',
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
    },
    infoContainer: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00a7f8',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 5,
    },
    section: {
        flexDirection: 'row',
        gap: 10,
        paddingBottom: 5
    },
    checkbox: {
        alignSelf: "center",
        color: "#00A7F8",
        backgroundColor: "#00A7F8",
    },
    scrollView: {
        borderColor: "black",
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
    },
    button: {
        width: 100,
        height: 40,
        padding: 5,
        borderRadius: 10,
    },
    buttonBar: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
    },
    labelSearch: {
        width: 60,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#00a7f8',
        marginBottom: 5,
    },
    input: {
        width: 120,
        height: 40,
        borderWidth: 1,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInput: {
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 5,
    },
    
});

export default styles;
