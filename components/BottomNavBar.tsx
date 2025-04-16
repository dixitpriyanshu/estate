// app/components/BottomNavBar.tsx

import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import {
  HomeIcon,
  MessageSquareIcon,
  HeartIcon,
  UserIcon,
} from "lucide-react-native";

const tabs = [
  { icon: HomeIcon, key: "home" },
  { icon: MessageSquareIcon, key: "chat" },
  { icon: HeartIcon, key: "favorites" },
  { icon: UserIcon, key: "profile" },
];

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <View className="flex-row justify-around bg-white py-3 rounded-t-3xl shadow-lg">
      {tabs.map(({ icon: Icon, key }) => {
        const isActive = key === activeTab;
        return (
          <TouchableOpacity
            key={key}
            onPress={() => setActiveTab(key)}
            className={`p-3 rounded-full ${
              isActive ? "bg-lime-400" : "bg-gray-100"
            }`}
          >
            <Icon size={22} color={isActive ? "#000" : "#9CA3AF"} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavBar;
