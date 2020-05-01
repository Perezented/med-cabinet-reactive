import React from 'react';

const AdvancedSearch = () => {
    return (
        <div>
            <form>
                <div>
                    <h3>Medical Symptoms to Combat:</h3>
                    <p>(You can select multiple.)</p>
                    <label for="depression">Depression</label>
                    <input type="checkbox" name="depression" id="depression" />
                    <label for="insomnia">Insomnia</label>
                    <input type="checkbox" name="insomnia" id="insomnia" />
                    <label for="depression">Depression</label>
                    <input type="checkbox" name="depression" id="depression" />
                    <label for="insomnia">Insomnia</label>
                    <input type="checkbox" name="insomnia" id="insomnia" />
                </div>
            </form>
        </div>
    );
};

export default AdvancedSearch;
