import { ImageBackground } from 'react-native';
import { styles } from './styles';
import backgoundImg from '../../assets/background-galaxy.png'

interface Props {
    children: React.ReactNode
}

export function Backgound({ children }: Props) {
    return (
        <ImageBackground
            source={backgoundImg}
            style={styles.container}
            defaultSource={backgoundImg}>
            {children}
        </ImageBackground>
    );
}