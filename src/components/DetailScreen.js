import React, {Component} from 'react';
import {StyleSheet, SectionList, FlatList, Modal, Text, TouchableHighlight, View, Button,Image, ActivityIndicator,AppRegistry} from 'react-native';


class DetailScreen extends Component {
  state = {
    modalVisible: false
    // recipe:
    // {
    //     title: "Chicken Parmigiana",
    //     pic: "https://www.gourmandize.com/media/10037_crop.jpg/tsp/chicken-parmigiana.jpg"
    // },
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentWillReceiveProps( newProps ){
 //     this.setState( {modalVisible : newProps.visible});
    this.setState( {recipe : newProps.recipe});
  }
  
  render() {
    
    //var item = this.props.data[1];
    //let pic1 = item.pic;
    return (
      <View style={{marginTop: 22}}>
        <Button title = "Let's See"
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
            <Text>{this.props.recipe.title}</Text>
            <View>
              <Text>{this.props.recipe.ingredients + "  "}</Text>
            </View>
              <Text>{this.props.recipe.directions}</Text>
              <Image source = {{uri: this.props.recipe.pic}} style={{width: 200, height: 200}}/>
              <Button title = "Can I Have Seconds?"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </Button>
            </View>
          </View>
        </Modal>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  activityIndicatorContainer:{
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },


  title:{
      fontSize: 36,
      fontWeight: "600"
  },

  description:{
      marginTop: 5,
      fontSize: 14,
  }
});
export default DetailScreen;