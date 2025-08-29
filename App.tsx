import React, { useState } from "react";
import { View, Text, TextInput, ActivityIndicator, Switch, Pressable, SectionList, StatusBar, ScrollView } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(false);

  return (
    
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 40, paddingTop: 60 }}>
    <StatusBar barStyle="dark-content" />

    <Text>!!This right here is a box where you can write stuff!! </Text>  <View style={{ marginBottom: 40 }}></View>

      <Text>TextInput — type below:</Text>
      <TextInput placeholder="Say whats on your mind here <^>" value={text} onChangeText={setText} style={{ borderWidth: 4, padding: 10, marginTop: 10, marginBottom: 10 }} />
      <Text>You typed: {text}</Text> <View style={{ marginBottom: 30 }}></View>

      <Text>!!This is a spinner that shows something is loading!! </Text>  <View style={{ marginBottom: 40 }}></View>

      <Text>ActivityIndicator — spinner:</Text> 
      <ActivityIndicator /> <View style={{ marginBottom: 40 }}></View>

      <Text>!!A toggle that switches between two states!! </Text>  <View style={{ marginBottom: 40, }}></View>

      <Text>Switch — toggle below:</Text> 
      <Switch value={isOn} onValueChange={setIsOn} />
      <Text>{isOn ? "Money" : "Need"}</Text> <View style={{ marginBottom: 40 }}></View>

      <Text>!!A area that reacts when pressed!! </Text>  <View style={{ marginBottom: 40 }}></View>

      <Text>Pressable — tap box below:</Text>
      <Pressable onPress={() => alert("The next 5 generations of your family shall receive ingrown toenails")} style={{ padding: 10, backgroundColor: "#eee", marginTop: 10, marginBottom: 40 }}>
        <Text>Do Not Tap Me Yo!!</Text> 
      </Pressable>

      <Text>!!A list of items grouped with headings at each section!! </Text>  <View style={{ marginBottom: 40 }}></View>

      <Text>SectionList — grouped list:</Text>
      <View style={{ maxHeight: 200 }}> 
        <SectionList
          sections={[{ title: "Kangaroo", data: ["Jumpy Jump", "Aussie"] }, { title: "Dingo", data: ["Whats that?", "Not a clue"] }]}  
          renderItem={({ item }) => <Text>{item}</Text>}
          renderSectionHeader={({ section }) => <Text style={{ fontWeight: "bold" }}>{section.title}</Text>}  
          keyExtractor={(item, index) => index.toString()} 
          style={{ marginBottom: 40 }}
        />
      </View>
    </ScrollView>
    
  );
}
