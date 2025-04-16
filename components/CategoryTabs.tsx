// app/components/CategoryTabs.tsx

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const categories = ["All", "Apartments", "House", "Villa", "Hotel", "Penthouse"];

const CategoryTabs = () => {
  const [active, setActive] = useState("All");

  return (
    <View className="mt-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setActive(cat)}
            className={`px-4 py-2 mr-2 rounded-full border ${
              active === cat
                ? "bg-black border-black"
                : "bg-white border-gray-300"
            }`}
          >
            <Text
              className={`text-sm ${
                active === cat ? "text-white" : "text-gray-700"
              }`}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryTabs;
