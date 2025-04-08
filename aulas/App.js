import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView  } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign'; 

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.instagramCard}>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/179962454?v=4' }} 
            style={styles.profilePic}/>
          <Text style={styles.username}>IgorBaez</Text>
        </View>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} 
          style={styles.instagramImage}/>
        <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


        <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/181283602?v=4' }} // Reutilizando seu avatar
            style={styles.profilePic}
            />
            <Text style={styles.username}>dev-rls</Text>
        </View>
          <Image 
          source={{ uri: 'data:image/jpeg;base64,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' }} 
          style={styles.instagramImage} />
         <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


        <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/180126607?v=4' }} // Reutilizando seu avatar
            style={styles.profilePic}/>
            <Text style={styles.username}>HisanoEdu</Text>
        </View>
          <Image 
          source={{ uri: 'https://animenew.com.br/wp-content/uploads/2024/12/Anime-Jujutsu-Kaisen-1.webp' }} 
          style={styles.instagramImage} />
         <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


        <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/181283441?v=4' }} // Reutilizando seu avatar
            style={styles.profilePic}
            />
            <Text style={styles.username}>JamilyGomes</Text>
        </View>
          <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0PRgZ4c5sOC2Y4cFN9sHD1nd7Xn1CPOpWNA&s' }} 
          style={styles.instagramImage} 
        />
         <View style={styles.actions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>


         <View style={styles.header}>
        <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/180126607?v=4' }} // Reutilizando seu avatar
            style={styles.profilePic}
            />
            <Text style={styles.username}>HisanoEdu</Text>
        </View>
        <Image 
          source={{ uri: 'data:image/jpeg;base64,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' }} 
          style={styles.instagramImage} />


        
      
      </View>
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
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  instagramCard: {
    width: 300, // Largura fixa para o post
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra no Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 32,
    height: 32,
    borderRadius: 16, // Circular
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  instagramImage: {
    width: '100%', // Preenche a largura do card
    height: 300, // Altura fixa para a imagem
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginRight: 15,
  },
  likes: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  caption: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 14,
  },
});