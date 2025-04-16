

import React from "react";
import { View, TextInput } from "react-native";
import { Search } from "lucide-react-native";

const SearchBar = () => {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-xl p-3 mt-4">
      <Search size={20} color="#A1A1AA" />
      <TextInput
        placeholder="Search Address, city, zip."
        placeholderTextColor="#A1A1AA"
        className="ml-3 flex-1 text-base text-gray-800"
      />
    </View>
  );
};

export default SearchBar;
