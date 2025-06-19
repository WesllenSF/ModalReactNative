import {Alert, Modal, StyleSheet, Text, View, TouchableOpacity, Image,ImageSourcePropType} from 'react-native';
import React, {useState} from 'react';

interface propsProduto{
    nome:string;
    categoria:string;
    preco:string;
    descricao:string;
    marca:string;
    imag: ImageSourcePropType;
}

export default function Produtos({nome, categoria, preco, descricao, marca, imag}:propsProduto){
    const [modalVisible, setModalVisible] = useState(false);
    return (
      
        <>

            {/* Modal onde exibe os detalhes dos produtos */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                              Alert.alert('Modal ');
                              setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                                  <View style={styles.imag}>
                                    <Image style={styles.imagCard} source={imag}/>
                                  </View>
                                <Text style={styles.nome}>Nome: {nome}</Text>
                                <Text style={styles.categoria}>Categoria: {categoria} </Text>
                                <Text style={styles.categoria}>Marca: {marca}</Text>
                                <Text style={styles.categoria}>Descrição: {descricao} </Text>
                                <Text style={styles.categoria}>Preço: {preco}</Text>                                

                                <TouchableOpacity
                                  style={[styles.button, styles.buttonClose]}
                                  onPress={() => setModalVisible(!modalVisible)}>
                                  <Text style={styles.botao}>Fechar</Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </Modal>
            {/* Modal onde exibe os detalhes dos produtos */}

            {/* Botão onde exibe cada produto */}
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                >
                    {/* Chama exibe os conteudos */}
                      <View style={styles.cartao}>
                          <Image style={styles.imag} source={imag}/>
                          <Text style={styles.nome}>Nome: {nome} </Text>
                          <Text style={styles.preco}>Categoria: {categoria}</Text>
                          <Text style={styles.preco}>Preço: {preco}</Text>
                      </View>
                    {/* Chama exibe os conteudos */}
                </TouchableOpacity>
            {/* Botão onde exibe cada produto */}
          
        </>
    );
}


const styles = StyleSheet.create({
  cartao: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'aqua',
    padding: '2%',
    marginLeft: '5%',
    width: '90%',
 },
  nome: {
    fontSize: 25,
    fontWeight:'bold',
    marginBottom: 15,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '100%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  categoria: {
    textAlign: 'left',
    marginBottom: 5,
    fontSize: 18,
  },
  botao: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  imag: {
    height: 200,
    width: 200,
    margin: 'auto',
  },
  imagCard: {
    height: 150,
    width: 150,
  },
});