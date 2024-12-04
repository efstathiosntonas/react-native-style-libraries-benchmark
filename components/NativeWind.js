import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COUNT } from "../utils";

const NativeWind = () => {
  return (
    <View className="flex flex-row flex-wrap justify-around">
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          className="m-1.5"
        >
          <View
            className={`border-2 p-4 justify-center items-center rounded-lg
                        ${i % 2 === 0 ? 'bg-blue-500' : 'bg-gray-500'}`}
          >
            <Text className="text-2xl font-bold">Item {i}</Text>
            <Text className="text-base">This is static content</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NativeWind;
