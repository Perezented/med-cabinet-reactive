import React from 'react';
import {
    settings,
    CardDiv,
    CardSection,
    capitalizeFirstLetter,
} from './Settings';

import Slider from 'infinite-react-carousel';

// PainKillerStrains that connects to HomePage.js
const PainKillerStrains = (props) => {
    console.log(props.props);

    props.props.map((value) => {
        console.log();
    });

    return (
        <CardSection>
            <h2>Ease The Pain Away With These Strains</h2>
            <Slider {...settings}>
                {props.props.map((value) => {
                    if (value.medical !== null) {
                        if (value.negative !== null) {
                            if (
                                value.medical.includes('Pain') &&
                                value.medical.includes('Fatigue') &&
                                value.medical.includes('Headaches') &&
                                value.description !== null
                            ) {
                                return (
                                    <CardDiv key={value.id}>
                                        <h3>{value.name}</h3>
                                        <p>
                                            {capitalizeFirstLetter(value.race)}
                                        </p>
                                        <h5>{value.medical}</h5>
                                        <p>{value.description}</p>
                                        <ul>Positive: {value.positive}</ul>
                                        <ul>Negative: {value.negative}</ul>
                                        <button>Add to Favorites</button>
                                    </CardDiv>
                                );
                            }
                        }
                    }
                })}
            </Slider>
        </CardSection>
    );
};
export default PainKillerStrains;
