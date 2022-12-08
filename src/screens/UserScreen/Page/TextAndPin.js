import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements'
import { styleCommon } from '../styles/common'

const TextAndPin = ({ titleArea }) => {
    return (
        <View style={styles.container}>
            <Text style={[styleCommon.h2, styles.title]}>{titleArea}</Text>
            <KeyboardAvoidingView
                behavior="padding"
            >
                <TextInput
                    style={[styles.input, { height: 200, textAlignVertical: 'top' }]}
                    placeholder=""
                    multiline={true}
                />
            </KeyboardAvoidingView >
            <Text style={[styleCommon.h2, styles.title]}>Đính kèm hình ảnh (tùy chọn)</Text>
            <View style={[styles.wrapperIcon]}>
                <Icon
                    name='paperclip'
                    type='font-awesome'
                    color='#000'
                />
            </View>
            <Pressable style={[styles.button]}>
                <Text>Gửi</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E1EDFF",
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
        flex: 1,
        fontFamily: "sans-serif",
    }, title: {
        marginVertical: 12
    },
    input: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 30,
        backgroundColor: "#ffff",
        borderWidth: 0,
        fontSize: 20
    },
    button: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(69, 89, 189, 0.6)',
        marginTop: 45
    },
    wrapperIcon: {
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50,
        borderRadius: 10,
    }
})



export default TextAndPin