import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "./components/organisms/Header";
import { useState } from "react";
import { User } from "./types/types";
import SearchBar from "./components/organisms/SearchBar";
import Row from "./components/molecules/Row";
import useFetchUsrData from "./hooks/useFetchUserData";


/**
 * Index Component
 * Serves as the entry point for fetching user data and rendering the `Home` component.
 * Utilizes a custom hook `useFetchUsrData` to fetch data from the API.
 *
 * @returns {JSX.Element} A loading message or the `Home` component with user data.
 */
export default function Index() {
  // Fetch user data using the custom hook
  const { data, loading } = useFetchUsrData();

  // Display loading text while data is being fetched
  if (loading) {
    return <Text>Loading Data</Text>;
  }

  // Render the `Home` component with fetched user data
  return <Home users={data ?? []} isLoading={loading} />;
}


interface HomeProps {
  users: User[];
  isLoading: boolean
}

interface SortOrder {
  column: keyof User | null;
  ascending: boolean;
}

const Home = (props: HomeProps) => {

  const [filteredData, setFilteredData] = useState<User[]>(props.users); // Filtered data for search/sort
  const [data, setData] = useState<User[]>(props.users)
  const [sortOrder, setSortOrder] = useState<SortOrder>({ column: null, ascending: true }); // Sorting state
  const [searchQuery, setSearchQuery] = useState<string>(''); // Search query
  const [showFilter, setShowFilter] = useState<boolean>(false) // show filter or header


  /**
     * Sorts the data based on the selected column.
     * @param column - the key on which we want to short.
     */
  const handleSort = <T extends keyof User>(column: T) => {
    const ascending = sortOrder.column === column ? !sortOrder.ascending : true;

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[column] < b[column]) return ascending ? -1 : 1;
      if (a[column] > b[column]) return ascending ? 1 : -1;
      return 0;
    });

    setSortOrder({ column, ascending });
    setFilteredData(sortedData);
  };

  /**
  * Filters the data based on the search query.
  * @param query - In search input.
  */
  const handleSearch = (query: string) => {
    // process search
    setSearchQuery(query)
    if (!query.trim()) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }

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
