import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileApp = () => {
  const [login, setLogin] = useState('');
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Carregar os dados do perfil salvo
    const loadProfile = async () => {
      const profile = await AsyncStorage.getItem('profileData');
      if (profile) {
        setProfileData(JSON.parse(profile));
      }
    };

    loadProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
      const profile = await response.json();
      setProfileData(profile);
      await AsyncStorage.setItem('profileData', JSON.stringify(profile));
    } catch (error) {
      console.error(error.message);
      alert('Usuário não encontrado');
    }
  };

  const clearProfile = async () => {
    setLogin('');
    setProfileData(null);
    await AsyncStorage.removeItem('profileData');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil dos Devs</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o login do GitHub"
          value={login}
          onChangeText={setLogin}
        />
        <TouchableOpacity style={styles.button} onPress={fetchProfile}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearProfile}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {profileData && (
        <View style={styles.profileContainer}>
          <Image style={styles.avatar} source={{ uri: profileData.avatar_url }} />
          <Text>ID: {profileData.id}</Text>
          <Text>Nome: {profileData.name}</Text>
          <Text>Repositórios: {profileData.public_repos}</Text>
          <Text>Criado em: {new Date(profileData.created_at).toLocaleDateString()}</Text>
          <Text>Seguidores: {profileData.followers}</Text>
          <Text>Seguindo: {profileData.following}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#222',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default ProfileApp;
