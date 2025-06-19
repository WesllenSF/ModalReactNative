
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Produtos from './componentes/produto';


  const produtos=[
    { 
      id:"1",
      nome:"MAJIN VEGETA DRAGON BALL Z",
      categoria:"Anime",
      preco:"148,00",
      descricao:"Vegeta é um personagem fictício da franquia Dragon Ball criado por Akira Toriyama",
      marca:"BANPRESTO",
      imag: require('./assets/goku.jpg'),
    },
    {
      id:"2", 
      nome:"SHEN LONG VERDE DB SUPER: SUPER HERO", 
      categoria:"Anime", 
      preco:"3.555,00", 
      descricao:"Shenlong (神龙) é um dragão da mitologia chinesa, considerado um espírito e um deus das tempestades e da chuva", 
      marca:"BANDAI",
      imag: require('./assets/goku.jpg'),
    },
    {
      id:"3", 
      nome:"MESTRE KAME JACKEY CHUN DRAGON BALL Z", 
      categoria:"Anime", 
      preco:"888,00", 
      descricao:"Mestre Kame, também conhecido no mangá como Muten Roshi é um personagem e protagonista de suporte da franquia Dragon Ball", 
      marca:"BANDAI",
      imag: require('./assets/goku.jpg'),
    },
    {
      id:"4", 
      nome:"GOHAN KID SSJ DRAGON BALL Z GX", 
      categoria:"Anime", 
      preco:"330,00", 
      descricao:"Son Gohan, também conhecido apenas como Gohan, é um personagem fictício da franquia Dragon Ball criado por Akira Toriyama", 
      marca:"BANPRESTO",
      imag: require('./assets/goku.jpg'),
    },
    {
      id:"5", 
      nome:"SON GOKU KID NA CABEÇA DO SHEN LONG DRAGON BALL Z", 
      categoria:"Anime", 
      preco:"1.545,00", 
      descricao:"Son Goku, cujo nome de nascimento é Kakarotto, é o protagonista da franquia Dragon Ball", 
      marca:"BANPRESTO",
      imag: require('./assets/goku.jpg'),
    },
    {
      id:"6", 
      nome:"SON GOKU ANGEL DRAGON BALL Z", 
      categoria:"Anime", 
      preco:"235,00", 
      descricao:"Son Goku, cujo nome de nascimento é Kakarotto, é o protagonista da franquia Dragon Ball", 
      marca:"BANPRESTO",
      imag: require('./assets/goku.jpg'),
    },
  ]

export default function App() {

  return (
    <View style={styles.container}>

            <View>
                      <Text style={styles.titulo}>Action Figures</Text>
            </View>                
                <FlatList
                  data={produtos}
                  renderItem={({item}) => 
                  <Produtos 
                  imag={item.imag}
                  nome={item.nome} 
                  categoria={item.categoria} 
                  preco={item.preco} 
                  descricao={item.descricao} 
                  marca={item.marca}
                  />}

                  keyExtractor={item => item.id}
                />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '15%',
    width: '90%',
    marginLeft: '5%',
    flex: 1,
    backgroundColor: 'white',
  },
    titulo: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight:'bold',
    },
});