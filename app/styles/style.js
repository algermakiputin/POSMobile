import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    },
    flex: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        marginBottom: 15,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    col1: {
        width: 105
    },  
    col2: {
        width: '50%',
    },
    formGroup: {
        marginBottom:20
    },
    input: {
        color: '#8a8a8a',
        height: 44,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
        letterSpacing: 0.8,
        paddingLeft: 15,
    },
    textDanger: {
        color: '#dc3545'
    },
    button: {
        backgroundColor:'#A7F4FE', 
        height:40, 
        width:125,
        justifyContent:'center', 
        alignContent:'center', 
        alignItems:'center',
        borderRadius: 5
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 15
    },
    flexColumns: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    floatBottom: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textColorWhite: {
        color: "#ffffff"
    },
    textCenter: {
        textAlign: 'center'
    },
    quantityInputWrapper: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#f4f4f5',
        width: 35,
        height: 25,
        flex: 1,
        maxHeight: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;