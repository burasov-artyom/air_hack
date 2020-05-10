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
      var myRequest = new Request('https://shinesquad.ru/avia/global/global_log.txt');
      fetch(myRequest , { mode: 'no-cors', credentials: 'omit' })
        .then(response => this.setState({data: response.text()}));
      alert('Подключение выполнено');
    } else {
      alert('Ошибка подключения');
    }
  }
  synchronize = () => {
    var xhr = new XMLHttpRequest();
    var body = 'data=' + encodeURIComponent(this.state.data['_55']);

    xhr.open("POST", 'https://shinesquad.ru/avia/update_from_device.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(body);

    alert('Данные синхронизированы')
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor="#4E1472" barStyle="light-content" />
          <ClassicHeader
              width={500}
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
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Roboto',
    marginLeft: 90,
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
