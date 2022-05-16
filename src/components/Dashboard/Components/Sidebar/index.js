// import { useState } from 'react'
import { Item, SidebarContainer } from "./SidebarElements";
import "./styles.css";

export const Sidebar = ({ showSidebar, sidebar }) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  let list = document.querySelectorAll('.list');
  for (let i = 0; i < list.length; i++){
    list[i].onClick = function (){
      let j = 0;
      while (j< list.length){
        list[j++].className = 'list active';
      }
    }
  }

  return(<></>);
};
//   return (
//     <>
//       <div className={sidebar ? "navigation active" : "navigation "}>
//         <ul>
//           <li className="list active">
//             <b></b>
//             <b></b>
//             <a href="0">
//               <span className="icon">
//                 <ion-icon name="people-outline"></ion-icon>
//               </span>
//               <span className="tittle">Usuarios</span>
//             </a>
//           </li>
//           <li className="list">
//             <b></b>
//             <b></b>
//             <a href="1">
//               <span className="icon">
//                 <ion-icon name="person-add-outline"></ion-icon>
//               </span>
//               <span className="tittle">Crear usuario</span>
//             </a>
//           </li>
//           <li className="list">
//             <b></b>
//             <b></b>
//             <a href="2">
//               <span className="icon">
//                 <ion-icon name="log-in-outline"></ion-icon>
//               </span>
//               <span className="tittle">Iniciar sessión</span>
//             </a>
//           </li>
//           <li className="list">
//             <b></b>
//             <b></b>
//             <a href="3">
//               <span className="icon">
//                 <ion-icon name="log-out-outline"></ion-icon>
//               </span>
//               <span className="tittle">Cerrar sessión</span>
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="toggle" onClick={showSidebar}>
//         <ion-icon name="menu-outline" className="open"></ion-icon>
//         <ion-icon name="close-outline" className="close"></ion-icon>
//       </div>
//     </>
//   );
// };
