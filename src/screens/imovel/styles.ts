import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#cccccc',
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
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
    },
    
});

export default styles;
