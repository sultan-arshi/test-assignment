import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface SearchBarProps {
    query: string;
    onSearch: (query: string) => void;
    onFilterPress: () => void;
}

/**
 * SearchBar Component
 * Displays an input for filtering the table data.
 */
const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch, onFilterPress }) => (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Search by name"
            value={query}
            onChangeText={onSearch}
        />
        </View>
        <Ionicons name='filter' size={25} onPress={onFilterPress}/>
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
        borderColor: 'gray',
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 12,
        height: 40,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    input: {
        flex: 1,
    },
});

export default SearchBar;