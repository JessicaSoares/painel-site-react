import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Confira esses destinos épicos</h1>
            <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
                        <CardItem src="images/img-3.jpg"
                        text = "explore as profundezas da selva amazonica"
                        label = "Aventura"
                        path = '/servicos'
                        />
                        <CardItem src="images/img-4.jpg"
                        text = "explore as profundezas da selva amazonica"
                        label = "Aventura"
                        path = '/servicos'
                        />
                        <CardItem src="images/img-8.jpg"
                        text = "explore as profundezas da selva amazonica"
                        label = "Aventura"
                        path = '/servicos'
                        />
                        <CardItem src="images/img-8.jpg"
                        text = "explore as profundezas da selva amazonica"
                        label = "Aventura"
                        path = '/servicos'
                        />
                        <CardItem src="images/img-8.jpg"
                        text = "explore as profundezas da selva amazonica"
                        label = "Aventura"
                        path = '/servicos'
                        />

                        
                        

                   </ul>
                </div> 
            </div>
        </div>
    );
}

export default Cards;
