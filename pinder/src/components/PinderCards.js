import { SwipeableDrawer } from "@material-ui/core";
import TinderCard from "react-tinder-card";
import React, { useEffect, useState } from "react";
import "./PinderCards.css";
import axios from './axios';

function PinderCards() {
    const [animal, setAnimal] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/pinder/cards');
            setAnimal(req.data);
        }

        fetchData();
    }, []);


    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name+"left the screen ");
    }

    return <div className="pinderCards">
        <div className = "pinderCards__cardContainer">
            {animal.map((a) => (
                <TinderCard
                className="swipe"
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, a.name)}
                onCardLeftScreen={() => outOfFrame(a.name)}>
                    <div 
                    style = {{ backgroundImage: `url(${a.imgUrl})`}}
                    className="card"
                    >
                        <h3>{a.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>;
}

export default PinderCards;