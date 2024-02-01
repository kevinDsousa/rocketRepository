import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../theme';

import { GameController } from 'phosphor-react-native'

export interface DuoCardProps {
  id: string,
  hourEnd: string,
  hourStart: string,
  name: string,
  useVouceChannel: boolean,
  weekDays: string[],
  yearsPlaying: number
}

interface Props {
  data: DuoCardProps,
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label='nome' value={data.name} />
      <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying}`} />
      <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} Dias \u2022 ${data.hourStart} - ${data.hourEnd}`} />
      <DuoInfo label='Chamada de áudio' value={data.useVouceChannel ? 'sim' : 'não'} colorValue={data.useVouceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} />

      <TouchableOpacity onPress={onConnect} style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}