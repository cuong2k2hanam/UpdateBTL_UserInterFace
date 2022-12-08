import { StyleSheet } from "react-native";
exports.styleCommon = StyleSheet.create({
    h1: {
        fontWeight: '700',
        fontSize: 18
    },
    h2: {
        fontWeight: '700',
        fontSize: 16
    }, h3: {
        fontWeight: '600',
        fontSize: 16
    },
    p12: {
        paddingVertical: 12,
    },
    m12: {
        marginHorizontal: 12,
    },
    rowDirection: {
        flexDirection: "row",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: 'rgba(59,89, 189, 0.5)',
    }
});
