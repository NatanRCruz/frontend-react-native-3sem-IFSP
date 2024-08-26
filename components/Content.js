import { View, Text, StyleSheet } from 'react-native'
import CardAccount from './CardAccount'

export default function Content() {

    const accounts = [
        {
            id: 0,
            service: 'Gmail',
            imgUrl: 'https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png',
            userName: 'natanrafael75@gmail.com'
        },
        {
            id: 1,
            service: 'Instagram',
            imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/038/447/961/small/ai-generated-instagram-logo-free-png.png',
            userName: 'natan750@gmail.com'
        },
        {
            id: 2,
            service: 'GitHub',
            imgUrl: 'https://www.svgrepo.com/show/447137/github-fill.svg',
            userName: 'natan57@aluno.ifsp.edu.br'
        }

    ]

    return (
        <View style={styles.content}>

            <Text>Oi, meu nome é Natan Rafael! Sou fã do Homem-Aranha e adoro tudo relacionado a carros. Também sou completamente viciado em doramas, aquelas séries asiáticas que te prendem do início ao fim.
            <br /><br />
            Além disso, curto muito desenhos animados, sempre me fascino com as histórias e o estilo artístico.
            <br /><br />
            Esses são alguns dos meus interesses que me definem e fazem parte do meu dia a dia.</Text>
            <br />

            {
                accounts.map( (account) => (
                    <CardAccount
                        key={account.id}
                        service={account.service}
                        imgUrl={account.imgUrl}
                        userName={account.userName}
                    />
                ))
            }

        </View>

    )
}

const styles = StyleSheet.create({
    content: {
        padding: 15,
        gap: 10
        // flex: 8,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#ededed',
        // flexDirection: 'row'
      }
})