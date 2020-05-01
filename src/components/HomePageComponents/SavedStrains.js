import React from 'react';
import { settings, CardDiv, CardSection } from './Settings';

import Slider from 'infinite-react-carousel';

// SavedStrains file that links to HomPage.js
class SavedStrains extends React.Component {
    render() {
        return (
            <CardSection>
                <h2>Saved Strains</h2>
                <Slider {...settings}>
                    <CardDiv>
                        <h3>StrainName</h3>
                        <p>StrainRace</p>
                        <p>
                            StrainText, description.StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description. StrainText, description.
                            StrainText, description.
                        </p>
                        <h5>Effects</h5>
                        <h6>Medical:</h6>
                        <ul>
                            <li>Effect1</li>
                            <li>Effect2</li>
                            <li>Effect3</li>
                        </ul>
                        <ul>Positive:</ul>
                        <ul>Negative:</ul>
                        <button>Add to Favorites</button>
                    </CardDiv>{' '}
                </Slider>
            </CardSection>
        );
    }
}
export default SavedStrains;
