import React from 'react';
import {
    settings,
    CardDiv,
    CardSection,
    capitalizeFirstLetter,
} from './Settings';

import Slider from 'infinite-react-carousel';

// SleepyStrains that connects to HomePage.js
const SleepyStrains = (props) => {
    console.log(props.props);

    props.props.map((value) => {
        console.log();
    });

    return (
        <CardSection>
            <h2>Strains To Help You Sleep</h2>
            <Slider {...settings}>
                {props.props.map((value) => {
                    if (value.medical !== null) {
                        if (value.negative !== null) {
                            if (
                                value.medical.includes('Insomnia') &&
                                value.rating === 4.8
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
export default SleepyStrains;
