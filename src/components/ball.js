//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';
// create a component
class Ball extends Component {
   constructor(props) {
      super(props);

      this.state = {
        position: new Animated.ValueXY()
      };

      this.state.panResponder = PanResponder.create({
         onStartShouldSetPanResponder: () => true,
         onPanResponderMove: (event, gesture) => {
           this.state.position.setValue({ x: gesture.dx, y: gesture.dy} );
         }
         // onPanResponderGrant: (evt, gesture) => {
         //   this.state.position.setOffset({ x: this.state.position.x, y: this.state.position.y });
         //    this.state.position.setValue({ x: 0, y: 0 });
         // }
      });

      this.state.position.addListener((value) => console.log(value));
   }
   componentDidMount() {
     this.state.position.setValue({ x:0, y:0});
     console.log("mounted!");
   }

   render() {
      let handles = this.state.panResponder.panHandlers;
      return (
         <Animated.View
            style={[styles.ball, this.state.position.getLayout()]}
            {...handles}
         />
      );
   }
}

const styles = StyleSheet.create({
   ball: {
      height: 80,
      width: 80,
      borderColor: 'black',
      borderRadius: 40,
      borderWidth: 40
   }
});

export default Ball;
