import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '../../types/type';
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
            <Text style={styles.cell}>{user.name}</Text>
            <Text style={styles.cell}>{user.age}</Text>
            <Text style={styles.cell}>{user.dob}</Text>
            <CheckBox
                checked={user.checked}
                onPress={() => {
                    onToggleCheckbox(user.id)
                }} />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    cell: {
        // flex: 1,
        // textAlign: 'center',
    },
});

export default Row;