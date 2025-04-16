// app/components/PropertyCard.tsx

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { HeartIcon } from "lucide-react-native";

type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  tag: string;
};

const PropertyCard = ({
  property,
}: {
  property: Property;
}) => {
  return (
    <View className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
      <View className="relative">
        <Image
          source={{ uri: property.image }}
          className="w-full h-52 rounded-2xl"
        />
        <View className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full">
          <Text className="text-xs font-semibold text-gray-700">{property.tag}</Text>
        </View>
        <TouchableOpacity className="absolute top-3 right-3 bg-white p-1 rounded-full">
          <HeartIcon size={18} color="#EF4444" />
        </TouchableOpacity>
      </View>

      <View className="p-4">
        <Text className="text-base text-gray-700">{property.title}</Text>
        <Text className="text-sm text-gray-500">{property.location}</Text>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-lg font-semibold text-black">{property.price}</Text>
          <Text className="text-yellow-500 text-sm">{property.rating} ★</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;
