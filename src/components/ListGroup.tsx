import { Fragment, useState } from "react";
interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    //   items = [];
    const message = items.length === 0 && <p>No items found</p>;
    const getMessage = () => {
      return items.length === 0 ? <p>No items found</p> : null;
    };
  
    // Event Handler
    //   const handleClick = (event: MouseEvent) => console.log(event);
  
    return (
      <Fragment>
        <h1>List {heading}</h1>
        {message}
        {getMessage()}
  
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }

// function ListGroup() {
//   //   const items = ["Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng", "Buôn Ma Thuột"];
//   // items.map(item => <li>{item}</li>)

//   let items = ["Hà Nội", "TP Hồ Chí Minh", "Đà Nẵng", "Buôn Ma Thuột"];

//   // Hook
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   //   items = [];
//   const message = items.length === 0 && <p>No items found</p>;
//   const getMessage = () => {
//     return items.length === 0 ? <p>No items found</p> : null;
//   };

//   // Event Handler
//   //   const handleClick = (event: MouseEvent) => console.log(event);

//   return (
//     <Fragment>
//       <h1>List</h1>
//       {message}
//       {getMessage()}

//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             key={item}
//             className={
//               selectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             onClick={() => {
//               setSelectedIndex(index);
//             }}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </Fragment>
//   );
// }

export default ListGroup;
