import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  sortOrder: { column: string | null; ascending: boolean };
  onSort: (column: string) => void;
}


/**
 * Header Component
 * Displays sortable column headers.
 */
const Header: React.FC<HeaderProps> = ({ sortOrder, onSort }) => {
  const columns = ['name', 'age', 'dob'];

  return (
    <View style={styles.header}>
      {columns.map((column) => (
        <TouchableOpacity
          key={column}
          style={styles.headerCell}
          onPress={() => onSort(column)}
        >
          <Text style={styles.headerText}>
            {column.toUpperCase()}
            {sortOrder.column === column && (
               <Ionicons
                name={sortOrder.ascending ? 'arrow-up' : 'arrow-down'}
                size={16}
                color="black" />
            )}
          </Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.headerCell}>SELECT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#e9ecef',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
    marginBottom: 20
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
  },
});

export default Header;
