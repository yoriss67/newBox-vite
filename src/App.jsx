import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import boxes from './boxes';
import Box from './Box';


export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  /** 31
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */


  function toggle(id) {
    
   /** 32
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
    // console.log(id);


    //   setThingsArray(prevState => [...prevState, `ComplexState ${prevState.length + 1}`])
    // setSquares(prevSquare => [...prevSquare, !prevSquare.on]);

// 自作❌
      // setSquares(prevSquare => [...prevSquare, !prevSquare[id]] );


      // 🌸
      // setSquares(prevSquares => {
      //   return prevSquares.map(square => {
      //     if (square.id === id) {
      //       return { ...square, on: !square.on };
      //     } else {
      //       return square;
      //     }
      //   });
      // });

      // むむむｍ
      setSquares(prevSquares => {
        return prevSquares.map(square => {
          // return 忘れ！！！！！！！
          return square.id === id ? {...square, on: !square.on } : square
        });
      });


      // 思い出しchallenge
      // function toggle(id) {
      //   setsquare(prevSquares => {
      //     prevSquares.map(square => {
      //       if (square.id == id) {
      //         return {...on, !square.idon}
      //       } else {
      //         ...square
      //       }
      //     })
      //   })   
      // }

      // 🌸returnなし
      // setSquares(prevSquares => prevSquares.map(square => (
      //   square.id === id
      //     ? { ...square, on: !square.on }
      //     : square
      // )));
      

      

      // 👩‍🎓 pushを使っているのでinferior approachです。imperative
    //   function toggle(id) {
    //     setSquares(prevSquares => {
    //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }





  }

  

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return <main>{squareElements}</main>;
}
