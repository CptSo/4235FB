import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../styles";

const restaurant = {
    name: 'Miku Restaurant',
    location: 'Vancouver',
    hours: '11:30a.m.-10p.m.',
    about: 
        'Situated along the Burrard inlet next to Vancouver’s landmark Canada Place, Miku overlooks the famous waterfront and is the proud pioneer of Aburi (flame seared) sushi in Canada. Delivering gourmet Aburi cuisine paired with a lively, energetic ambience, Miku offers a private dining room, boasting the best view in the city. At Miku, Traditional Japanese flavours and techniques are combined with local, West Coast elements to create a truly unique dining experience enjoyed by locals and travellers alike.',
};

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{restaurant.name}</Text>

            <Text style={styles.info}>
                {restaurant.hours} &#8226; {restaurant.location}
            </Text>

            <View style={gs.divider} />

            <Text style={gs.sectionTitle}>About {restaurant.name}</Text>
            <Text style={styles.about}>{restaurant.about}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg
    },
    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
    
});