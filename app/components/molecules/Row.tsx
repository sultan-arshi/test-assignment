import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '../../types/types';
import CheckBox from '../atoms/CheckBox';

interface RowProps {
    user: User;
    onToggleCheckbox: (id: number) => void;
}

/**
 * Row Component
 * Displays a single user's data.
 */
const Row: React.FC<RowProps> = ({ user, onToggleCheckbox }) => {

    return (
        <View style={styles.row}>
            <View style={styles.constainer}>
                <View>
                    <Text style={styles.cell}>Name: {user.name}</Text>
                    <Text style={styles.cell}>Age: {user.age}</Text>
                    <Text style={styles.cell}>Data of Birth: {user.dob}</Text>
                </View>
                <CheckBox
                    checked={user.checked}
                    onPress={() => {
                        onToggleCheckbox(user.id)
                    }} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    infoView: {

    },
    constainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cell: {
    },
});

export default Row;