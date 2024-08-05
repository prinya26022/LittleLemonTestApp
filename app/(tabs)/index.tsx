// src/app/index.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    { id: '1', name: 'Spaghetti', category: 'Pasta', price: 12, image: 'https://cdn.discordapp.com/attachments/376320285328015363/1269908107858018304/Easyspaghettiwithtomatosauce_11715_DDMFS_1x2_2425-c67720e4ea884f22a852f0bb84a87a80.png?ex=66b1c596&is=66b07416&hm=12943c0281bed79d6e300799a2b24bd0498038af47a932834b24e527643ff085&' },
    { id: '2', name: 'Caesar Salad', category: 'Salads', price: 8, image: 'https://cdn.discordapp.com/attachments/376320285328015363/1269908180591448147/0328-ceasar-salad-lede.png?ex=66b1c5a8&is=66b07428&hm=ada0765037bbb47bb066ea3f4e3ac2575fac6860a5b8e5b12548be803de58ffc&' },
    { id: '3', name: 'Grilled Chicken', category: 'Entrees', price: 15, image: 'https://cdn.discordapp.com/attachments/376320285328015363/1269908228876013620/grilled-chicken-breast-index-6626cdb057b5b.png?ex=66b1c5b3&is=66b07433&hm=f7518306cb774d9319f31dd30ca8384328997dc9d986014fa9eec56857a77f2c&' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMenuItems = selectedCategory
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <View style={styles.hero}>
        <Image 
          style={styles.heroImage}
          source={{ uri: 'https://cdn.discordapp.com/attachments/376320285328015363/1269907898746671146/premium_photo-1675237625689-292df6ee7fce.png?ex=66b1c564&is=66b073e4&hm=68dea565aa15535c6cb73cccf7a89b1d7ff013fcdaa4c64485345ccfdb09f64e&' }}
        />
        <Text style={styles.heroText}>Welcome to Little Lemon Restaurant!</Text>
        <TextInput style={styles.searchBar} placeholder="Search..." />
      </View>
      <View style={styles.menuCategories}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Pasta' && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory('Pasta')}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === 'Pasta' && styles.selectedCategoryButtonText]}>Pasta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Salads' && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory('Salads')}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === 'Salads' && styles.selectedCategoryButtonText]}>Salads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Entrees' && styles.selectedCategoryButton]}
          onPress={() => setSelectedCategory('Entrees')}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === 'Entrees' && styles.selectedCategoryButtonText]}>Entrees</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.menuItemImage} />
            <View style={styles.menuItemText}>
              <Text style={styles.menuItemName}>{item.name}</Text>
              <Text style={styles.menuItemCategory}>{item.category}</Text>
              <Text style={styles.menuItemPrice}>${item.price}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.profileButton} onPress={() => router.push('/profile')}>
        <Text style={styles.profileButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff8e1',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff6f00',
  },
  hero: {
    padding: 20,
    backgroundColor: '#ffe0b2',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  heroText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ff6f00',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: '100%',
  },
  menuCategories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffb74d',
    borderRadius: 20,
  },
  selectedCategoryButton: {
    backgroundColor: '#ff6f00',
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedCategoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: '#fff8e1',
    borderRadius: 10,
    marginBottom: 10,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  menuItemText: {
    flex: 1,
    paddingLeft: 10,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemCategory: {
    fontSize: 14,
    color: '#757575',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#ff6f00',
    fontWeight: 'bold',
  },
  profileButton: {
    padding: 15,
    backgroundColor: '#ff6f00',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  profileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
