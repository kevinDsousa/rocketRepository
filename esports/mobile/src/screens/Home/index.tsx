import React from 'react';
import { Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';
import { GameCard, GameCardProps } from '../../components/GameCard';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Backgound } from '../../components/Backgound';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation()

  const handleOpenGame = ({id, title, bannerURL}: GameCardProps) => {
    navigation.navigate('game', {id, title, bannerURL});
  }

  useEffect(() => {
    fetch('http://192.168.100.224:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Backgound>
      <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={styles.logo} />
        <Header title="Encontre seu duo" subtitle="Selecione o game que deseja jogar..." />
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)} />
          )} />
      </SafeAreaView>
    </Backgound>
  );
}