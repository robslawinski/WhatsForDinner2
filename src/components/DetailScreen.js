import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button} from 'react-native';

class DetailScreen extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentWillReceiveProps( newProps ){
      this.setState( {modalVisible : newProps.visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Button title = "t4ed"
           onPress={() => {
             this.setModalVisible(!this.state.modalVisible);
            }}
        />

 
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>

              <Text>Hello World!</Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default DetailScreen;