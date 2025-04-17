import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

// Componente reutilizável para o cartão do Instagram
const InstagramCard = ({ profilePic, username, imageSource, onLike, isLiked }) => {
  return (
    <View style={styles.instagramCard}>
      <View style={styles.header}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={imageSource} style={styles.instagramImage} />
      <View style={styles.actions}>
        <TouchableOpacity onPress={onLike}>
          <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} color={isLiked ? 'red' : 'black'} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="message1" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  // Estado para controlar curtidas de cada cartão
  const [likes, setLikes] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
  });

  const handleLike = (cardKey) => {
    setLikes((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  const handlePress = () => {
    alert('Você clicou no botão!');
  };

  // Dados dos cartões
  const cards = [
    {
      key: 'card1',
      profilePic: 'https://avatars.githubusercontent.com/u/179962454?v=4',
      username: 'IgorBaez',
      imageSource: { uri: 'https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    },
    {
      key: 'card2',
      profilePic: 'https://avatars.githubusercontent.com/u/181283602?v=4',
      username: 'dev-rls',
      imageSource: require('./Image/onca.jpg'),
    },
    {
      key: 'card3',
      profilePic: 'https://avatars.githubusercontent.com/u/180126607?v=4',
      username: 'HisanoEdu',
      imageSource: { uri: 'https://animenew.com.br/wp-content/uploads/2024/12/Anime-Jujutsu-Kaisen-1.webp' },
    },
    {
      key: 'card4',
      profilePic: 'https://avatars.githubusercontent.com/u/181283441?v=4',
      username: 'JamilyGomes',
      imageSource: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PRgZ4c5sOC2Y4cFN9sHD1nd7Xn1CPOpWNA&s' },
    },
    {
      key: 'card5',
      profilePic: 'https://avatars.githubusercontent.com/u/180126607?v=4',
      username: 'HisanoEdu',
      imageSource: require('./Image/maomao.jpg'),
    },
    {
      key: 'card6',
      profilePic: 'https://avatars.githubusercontent.com/u/180126607?v=4',
      username: 'HisanoEdu',
      imageSource: require('./Image/maomao2.jpg'),
    },
        {
      key: 'card7',
      profilePic: 'https://avatars.githubusercontent.com/u/180126607?v=4',
      username: 'HisanoEdu',
      imageSource: require('./Image/maomao3.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {cards.map((card) => (
          <InstagramCard
            key={card.key}
            profilePic={card.profilePic}
            username={card.username}
            imageSource={card.imageSource}
            onLike={() => handleLike(card.key)}
            isLiked={likes[card.key]}
          />
        ))}
        <Button title="Botão teste" onPress={handlePress} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagramCard: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  instagramImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginRight: 15,
  },
});