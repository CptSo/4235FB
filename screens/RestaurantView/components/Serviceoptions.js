import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Feather, MaterialCommunityIcons, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Serviceoptions() {
    return (
        <View style={gs.sectionContainer}>
            <Text style ={ gs.sectionTitle}>Service Options</Text>

            <View style={styles.ServiceoptionsContainer}>
                <View style={styles.serviceContainer}>
                    <View style={styles.service}>
                        <MaterialCommunityIcons name='grill' size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.serviceName}>Outdoor Dining</Text>
                </View>

                <View style={styles.serviceContainer}>
                    <View style={styles.service}>
                        <MaterialCommunityIcons name='truck-delivery' size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.serviceName}>Delivery</Text>
                </View>

                <View style={styles.serviceContainer}>
                    <View style={styles.service}>
                        <Ionicons name='log-out-outline' size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.serviceName}>Takeout</Text>
                </View>

                <View style={styles.serviceContainer}>
                    <View style={styles.service}>
                        <FontAwesome5 name='utensils' size={24} color={colors.lightHl} />
                    </View>
                    <Text style={styles.serviceName}>Dine-in</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ServiceoptionsContainer:{
        marginTop: 16,
        marginHorizontal: 16,
        ...gs.rowBetween,
        flexWrap: 'wrap'
    },
    serviceContainer: {
        alignItems: 'center',
        width: 95, 
        marginVertical: 12
    },
    service: {
        width: 48, 
        height: 48,
        borderRadius: 48/2,
        ...gs.center,
        backgroundColor: '#444'
    },
    serviceName: {
        color: colors.lightHl,
        fontSize: 12,
        fontWeight: '600',
        marginTop: 6,
        textAlign: 'center'
    }
    
});