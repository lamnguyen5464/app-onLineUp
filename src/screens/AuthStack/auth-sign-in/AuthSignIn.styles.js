import { StyleSheet } from 'react-native';
import { DefaultSize } from '@utils/Constants';
import Colors from '@utils/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black_05,
    },
    foreground: {
        height: '30%',
        borderBottomLeftRadius: DefaultSize.XL,
        borderBottomRightRadius: DefaultSize.XL,
    },
    pos_overlay: {
        height: '70%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    pos_title: {
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        marginTop: DefaultSize.XL,
    },
    bt_sign_in: {
        marginTop: DefaultSize.XL,
    },
    bt_sign_up: {
        marginTop: DefaultSize.S,
    },
});

export default styles;
