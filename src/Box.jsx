import React, { useState } from 'react';

export default function Box(props) {
  /**
   * Challenge: Create state controlling whether
   * this box is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   *　
   * Create an event listener so when the box is clicked,
   * it toggles from "on" to "off".
   *
   * Goal: clicking each box should toggle it on and off.
   */

// undefinedになる
console.log(props.id)


  const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
  }





  // return (
  //     <div style={styles} className="box" onClick={toggle}></div>
  // )
  return <div style={styles} className="box" onClick={( ) => props.toggle(props.id)}></div>
}


// 初期値がon/offでクリックでcolorful
// export default function Box(props) {

//   // 🌸
//   // const [styles, setStyles] = useState({backgroundColor: "transparent"});

//   // 🤔最初はprops.onでクリックでcolorful
//   // 自作❌
//   // const [styles, setStyles] = useState(props.on);
//   // 🌸
//   const [styles, setStyles] = useState({
//     // 📄初期値で const styleの内容を書いておく
//     backgroundColor: props.on ? '#000' : 'transparent',
//   });


//   function random() {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     // 🌸
//     const color = `rgb(${red}, ${green}, ${blue})`;

//     // 自作❌
//     // setOn(
//     //     styles = {
//     //     backgroundColor :`rgb(${red}, ${green}, ${blue})`
//     // })

//     // 🌸
//     setStyles({ backgroundColor: color });
//   }


//   return <div style={styles} className="box" onClick={random}></div>;
// }
