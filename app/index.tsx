import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./components/Header";
import { useState } from "react";

export default function Index() {

  const [sortOrder, setSortOrder] = useState({ column: null, ascending: true }); // Sorting state


  // Handle sorting by column
  const handleSort = () => {
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <Header sortOrder={sortOrder} onSort={handleSort} />

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
