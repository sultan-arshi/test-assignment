import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  sortOrder: { column: string | null; ascending: boolean };
  onSort: (column: string) => void;
}

/**
 * Header Component
 * @param {Object} props - Component props
 * @param {Object} props.sortOrder - Current sort order state
 * @param {Function} props.onSort - Callback to handle sorting
 */
const Header: React.FC<HeaderProps> = ({ sortOrder, onSort }) => {
  return (
    <View style={styles.headerRow}>
      {['name', 'age', 'dob'].map((column) => (
        <TouchableOpacity key={column} onPress={() => onSort(column)} style={styles.headerCell}>
          <Text style={styles.headerText}>
            {column.toUpperCase()}
            {sortOrder.column === column &&
              <Ionicons name={sortOrder.ascending ? 'arrow-up' : 'arrow-down'} size={16} color="black" />
            }
          </Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.headerCell}>Select</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#e9ecef',
    borderBottomWidth: 1,
    borderColor: '#dee2e6',
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
