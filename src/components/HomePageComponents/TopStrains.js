import React from 'react';
import Slider from 'infinite-react-carousel';

import {
    settings,
    CardDiv,
    CardSection,
    capitalizeFirstLetter,
} from './Settings';

// Top Strains that connects to HomePage.js
const TopStrains = (props) => {
    // console.log(props.props);

    return (
        <CardSection>
            <h2>Top Strains</h2>
            {/* Component from infinite-react-carousel */}
            <Slider {...settings}>
                {props.props.map((value) => {
                    if (value.medical !== null) {
                        if (value.negative !== null) {
                            if (value.rating === 5) {
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
export default TopStrains;
