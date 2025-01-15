import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import { User } from "./types/type";

export default function Index() {

  return (
    <Home/>
  )
}


const Home = () => {

  const [data, setData] = useState<User[]>([]); // data to render
  const [sortOrder, setSortOrder] = useState({ column: null, ascending: true }); // Sorting state


/**
   * Sorts the data based on the selected column.
   * @param column - The column to sort by.
   */
  const handleSort = (column: string) => {
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      
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
