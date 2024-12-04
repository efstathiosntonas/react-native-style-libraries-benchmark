import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { COUNT } from "../utils";

const Twrnc = () => {
  return (
    <View style={tw`flex flex-row flex-wrap justify-around`}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          style={tw`m-1.5`}
        >
          <View
            style={tw`border-2 p-2.5 justify-center items-center rounded-lg ${
              i % 2 === 0 ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            <Text style={tw`text-2xl font-bold`}>Item {i}</Text>
            <Text style={tw`text-base`}>This is static content</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Twrnc;
