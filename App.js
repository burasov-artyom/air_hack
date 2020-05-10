import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ClassicHeader } from "@freakycoder/react-native-header-view";

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
	  };
  }

  connect = () => {
    if (fetch('https://shinesquad.ru/avia/global.php')) {
      alert('Подключение выполнено');
    } else {
      alert('Ошибка подключения');
    }
  }
  synchronize = () => {
    fetch('https://shinesquad.ru/avia/local.php?add_updates=%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C+%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F')
  }

  render() {
    return (
      <View style={styles.container} >
        <StatusBar backgroundColor="#4E1472" barStyle="light-content" />
        <ClassicHeader
            width={360}
            leftComponentDisable
            rightComponentDisable
            height={70}
            backgroundColor={'#6A1B9A'}
            leftComponent= {
              <Text style={styles.headerText}>ПВЗ №42</Text>
            }
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.btn} onPress={this.connect}>
              <Text style={styles.btnText}>Подключиться к серверу</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.synchronize}>
              <Text style={styles.btnText}>Синхронизировать данные</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Roboto',
    marginLeft: 20,
    marginTop: -10
  },
  buttonsContainer: {
    flex: 10,
    justifyContent: 'center'
  },
  btn: {
    padding: 15,
    margin: 50,
    backgroundColor: '#AB47BC',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    fontFamily: 'Roboto'
  }
});
