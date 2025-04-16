
import { Bell } from "lucide-react-native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const HeaderBar = () => {
  return (
    <View className="flex-row justify-between items-center mt-4">
      <Text className="text-xl font-semibold text-gray-800">Estate<Text className="text-lime-500">Ease</Text></Text>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity>
            <Bell size={20} color="#A1A1AA" />
        </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity></View>
    </View>
  );
};

export default HeaderBar;
