import React, { useState } from 'react';

import { authenticAxios } from '../../utils/authenticAxios';

import styled from 'styled-components';

const SearchBar = () => {
    // Empty initial state for the search bar
    const [search, setSearch] = useState({
        searchString: '',
    });

    // Function to handle the search bar
    const handleChanges = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    //Add a Submit search bar (onSubmit)
    const submitSearch = (e) => {
        e.preventDefault();
        authenticAxios()
            .post('/', search) //UPDATE ME WITH NEW POST LINK//////////
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //  Styled-Components
    const Search = styled('form')`
        input {
            width: 30vw;

            margin-top: 3%;
        }
    `;
    const SearchContainer = styled('div')`
        width: 50vw;
        padding: 3%;
        button {
            margin: 2%;
        }
    `;

    return (
        // Search bar form with button
        <>
            <SearchContainer>
                <Search>
                    <input
                        type="text"
                        name="searchBar"
                        value={search.searchString}
                        onChange={handleChanges}
                        placeholder="Search Strains, Effects, or Ailments"
                    />
                    <button>Search</button>
                </Search>
                {/* <AdvancedSearch /> */}
            </SearchContainer>
        </>
    );
};

export default SearchBar;
