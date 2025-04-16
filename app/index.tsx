// app/screens/Home.tsx

import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBar from "../components/HeaderBar";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import PropertyCard from "../components/PropertyCard";
import BottomNavBar from "@/components/BottomNavBar";

const mockProperties = [
  {
    id: "1",
    title: "Modern 2 Bedroom Apartment In New York.",
    location: "Downtown, New York",
    price: "$1,200 / month",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1560185008-c3b0e1dba3c6",
    tag: "Apartments",
  },
  {
    id: "2",
    title: "Luxury Apartment with City View",
    location: "Manhattan, New York",
    price: "$1,800 / month",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    tag: "Apartments",
  },
];

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderBar />
        <SearchBar />
        <CategoryTabs />
        <View className="mt-4">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </View>

      </ScrollView>
      <BottomNavBar />
    </SafeAreaView>
  );
};

export default Home;
