import React from 'react';
import { View, Text, Button, ScrollView, Image } from 'react-native';
import styles from './styles';

const jobs = [
  {
    id: 1,
    title: 'Desenvolvedor Frontend',
    details: 'Experiência com React, JavaScript e CSS.',
    image: 'https://agilize.com.br/blog/wp-content/uploads/2022/12/desenvolvedor-pj.png',
    contact: '123-456-7890',
    email: 'frontend@example.com',
    description: 'Desenvolver interfaces de usuário eficientes e responsivas.',
  },
  {
    id: 2,
    title: 'Desenvolvedor Backend',
    details: 'Conhecimento em Node.js, Express e bancos de dados.',
    image: 'https://www.integrasist.com.br/dados/editor/image/WhatsApp_Image_2021_04_05_at_21.13.13.jpeg',
    contact: '987-654-3210',
    email: 'backend@example.com',
    description: 'Implementar a lógica de negócios no servidor.',
  },
  // Adicione mais vagas conforme necessário
];

const JobList = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {jobs.map(job => (
        <View key={job.id} style={styles.jobItem}>
          <Image source={{ uri: job.image }} style={styles.image} />
          <Text style={styles.title}>{job.title}</Text>
          <Button
            title="Saiba mais"
            onPress={() => navigation.navigate('JobDetails', { job })}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default JobList;
