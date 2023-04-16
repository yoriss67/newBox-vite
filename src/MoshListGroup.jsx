import React, { useState } from 'react';

export default function Mosh() {

    // https://www.youtube.com/watch?v=SqcY0GlETPk&t=3512s
    // 34:35
    let items = ["New York", "Tokyo", "Bali"]
    items = []


    
    // 💙ts
    interface Props {
      items: string[];
      heading: string;
    }
    

    function ListGroup(props: Props) {
      let items = ["New York", "Tokyo", "Bali"]
      const [selectedIndex, setSelectedIndex] = useState(-1)
    

    // if (items.length === 0) {
    //     return <div>No items found</div>
    // }

  return (
    <>
    <h4>City List</h4>
    <ul className='list-group'>
        {items.map((item) => (
            <li className='list-group-item'>{item}</li>
        ))}
    </ul>
    </>
  );

        }
}
