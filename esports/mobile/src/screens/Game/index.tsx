import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from './styles';
import { Backgound } from '../../components/Backgound';
import { GameParams } from '../../@types/navigation';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';

export const Game = () => {

  const [duos, setDuos] = useState<DuoCardProps[]>([])

  const navigation = useNavigation()
  const route = useRoute();
  const game = route.params as GameParams;

  const handleGoBack = () => {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.100.224:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Backgound>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20} />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image source={{ uri: game.bannerURL }} style={styles.cover} resizeMode='cover' />

        <Header title={game.title} subtitle='Conecte-se e comece a jogar!' />

        <FlatList
          horizontal
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.empatyListContent]}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.empatyListText}>Não há ánuncios publicados para este jogo ainda</Text>
          )}
          style={styles.containerList}
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <DuoCard onConnect={() => { }} data={item} />} />
      </SafeAreaView>
    </Backgound>
  );
}