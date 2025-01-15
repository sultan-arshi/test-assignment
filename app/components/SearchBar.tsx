import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface SearchBarProps {
    query: string;
    onSearch: (query: string) => void;
}

/**
 * SearchBar Component
 * Displays an input for filtering the table data.
 */
const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Search by name"
            value={query}
            onChangeText={onSearch}
        />
        </View>
        <Ionicons name='filter' size={25} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignItems: 'center',
        gap: 10,
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 12,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 3,
        shadowRadius: 3,
        flex: 1,
        backgroundColor: "#FFF",
    },
    input: {
        height: 40,
        flex: 1,
    },
});

export default SearchBar;