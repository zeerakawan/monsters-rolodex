import React from 'react';
import { Card } from '../Card/Card';
import './card-list.css';
export const CardList = props => (
    <div className = 'card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
);