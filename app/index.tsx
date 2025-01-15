import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import { User } from "./types/type";
import SearchBar from "./components/SearchBar";

export default function Index() {

  return (
    <Home/>
  )
}


const Home = () => {

  const [data, setData] = useState<User[]>([]); // data to render
  const [sortOrder, setSortOrder] = useState({ column: null, ascending: true }); // Sorting state
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query


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

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <SearchBar query={searchQuery} onSearch={handleSearch} />
      {/* Header */}
      <Header sortOrder={sortOrder} onSort={handleSort} />

      {/* Data Rows or FlatList*/}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
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
