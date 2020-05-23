import React from 'react';
import Singleitem from '../Singleitem/Singleitem';
import './Multipleitem.css'; 
import ResData from '../../../../Data/itemData'

class Multipleitem extends React.Component{
    render(){
        const withData =ResData.map(item=>
         <Singleitem 
           key={item.id}
           name={item.name}
           imagepath={item.imagepath}
           price={item.price}
           quantity={item.quantity}
           dishtype={item.dishtype}
           />)
        return(
            <div className="MD">
            <ul>
                <li className="Dispalyitem">{withData}</li>
            </ul>
            
            </div>
        );
    }
}
export default Multipleitem;