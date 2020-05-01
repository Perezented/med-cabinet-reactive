import styled from 'styled-components';

// Dummy data for testing before the API link
export const initialState = [
    {
        id: 100,
        name: 'blah',
        race: 'hybrid',
        flavors: 'Berry, Blueberry, Citrus',
        positive: 'Hungry, Euphoric, Creative, Aroused',
        negative: 'Dry Mouth',
        medical: 'Pain, Nausea, Headaches',
        rating: 4.2,
        description: 'This is some good stuff.',
    },
    {
        id: 101,
        name: 'blah2',
        race: 'sativa',
        flavors: 'Berry, Blueberry, Citrus',
        positive: 'Hungry, Euphoric, Creative, Aroused',
        negative: 'Dry Mouth',
        medical: 'Pain, Nausea, Headaches',
        rating: 4.2,
        description: 'This is some good stuff.',
    },
];

// Styled-Components that will be displayed across all the carousels
export const CardDiv = styled('div')`
    border: 1px solid black;
    margin: 5% 0;
    padding: 0;
    height: 45vh;
    display: grid;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 2fr 0.5fr 0.5fr 0.5fr;
    align-items: space-evenly;
    justify-content: space-evenly;
`;
export const CardSection = styled('section')`
    margin: 1% 0 3%;
    padding: 1%;
`;

// Settings for the Carousels
export const settings = {
    adaptiveHeight: false,
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplayScroll: 4,
    autoplaySpeed: 5000,
    centerMode: false,
    dots: true,
    duration: 300,
    initialSlide: 1,
    slidesToShow: 5,
};

// Function to get a capital first letter.
export function capitalizeFirstLetter(string) {
    if (typeof string == undefined) return;
    var firstLetter = string[0] || string.charAt(0);
    return firstLetter ? string.replace(/^./, firstLetter.toUpperCase()) : '';
}
