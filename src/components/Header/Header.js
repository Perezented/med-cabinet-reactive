import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

import styled from 'styled-components';

export default function Header() {
    // Styled-Component
    const FlexedDiv = styled('div')`
        display: grid;
        grid-template-columns: 1fr 2.5fr 0.5fr;
        justify-items: center;
        align-items: center;
        background-color: DarkSeaGreen;
        h2 {
            color: black;
            text-decoration: none;
            font-size: 3rem;
            margin: 0;
        }
    `;

    // Header Component for pages all across. Has Logo, SearchBar, and Login/Register Buttons
    return (
        <FlexedDiv>
            {/* Links to different parts of the website on the navigation. */}
            <ul>
                <Link to="/home">
                    <h2>MedCabinet</h2>
                </Link>
            </ul>
            {/* SearchBar component for the Headers */}
            <SearchBar />
            <Link to="/profile">
                <h4>Profile</h4>
            </Link>
        </FlexedDiv>
    );
}
