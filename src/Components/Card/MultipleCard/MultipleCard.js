import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './MultipleCard.css'; 
import ResData from '../../../Data/ResData'

class MultipleCard extends React.Component{
    render(){
        const withData =ResData.map(item=>
         <SingleCard 
           key={item.id}
           name={item.name}
           image={item.imagepath}
           dishmode={item.dishmode}
           cost={item.cost}
           amount={item.amount}
           paymode={item.paymode}
           review={item.review}
           />)
        return(
            <div className="MD">
            <ul>
                <li className="DispalyCard">{withData}</li>
            </ul>
            
            </div>
        );
    }
}
export default MultipleCard;