import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import { User } from "./types/type";
import SearchBar from "./components/SearchBar";
import Row from "./components/molecules/Row";

export default function Index() {

  return (
    <Home />
  )
}


const Home = () => {

  const [data, setData] = useState<User[]>([]); // data to render
  const [filteredData, setFilteredData] = useState<User[]>([{
    name: "Sultan Ali",
    id: 0,
    age: 0,
    dob: "",
    checked: false
  }]); // Filtered data for search/sort
  const [sortOrder, setSortOrder] = useState({ column: null, ascending: true }); // Sorting state
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query
  const [showFilter, setShowFilter] = useState<boolean>(false)


  /**
     * Sorts the data based on the selected column.
     * @param column - The column to sort by.
     */
  const handleSort = (column: string) => {
  };

  /**
  * Filters the data based on the search query.
  * @param query - In search input.
  */
  const handleSearch = (query: string) => {
    // process search
    setSearchQuery(query)

  }

  /**
   * Show and hide the headerView for Filtering
   */
  const onFilterPress = () => {
    setShowFilter(!showFilter)
  }

  /**
   * TogleCheckBox if user Selected
   * @param id of the user
   */
  const togleCheckbox = (id: number) => {
    const updatedData = filteredData.map((user) =>
      user.id === id ? { ...user, checked: !user.checked } : user
    );
    setFilteredData(updatedData);
    setData(data.map((user) => (user.id === id ? { ...user, checked: !user.checked } : user)));
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <SearchBar query={searchQuery} onSearch={handleSearch} onFilterPress={onFilterPress} />
      {/* Header */}
      {showFilter &&
        <Header sortOrder={sortOrder} onSort={handleSort} />
      }

      {/* Data Rows or FlatList*/}
      <FlatList
        data={filteredData}
        renderItem={({ item }) =>
          <Row
            user={item}
            onToggleCheckbox={togleCheckbox} />
        }
        keyExtractor={(item) => item.id.toString()}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
});
