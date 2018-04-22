import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Button, Image} from 'react-native';
import DetailScreen from './DetailScreen';

class PreviewScreen extends Component {
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
        <Button title = "What's For Dinner?"
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
              <DetailScreen/>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
            <View>
              <Button title = "Next"
               onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
              }}
            />
            </View>
          </View>
        </Modal>
               

      </View>
    );
  }
}

export default PreviewScreen;