import React from 'react';

import SelectField from 'react-md/lib/SelectFields';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons/Button';

import { SVGIcon } from 'react-md';

import arrowDropDown from '../assets/icons/arrow_drop_down.svg';
import '../assets/stylesheets/Flexi.css';

const Flexi=({
    name,
    onSubmit,
    config,
    handleChange
}) => {    
    var a=config.items[0].name.toString()
    console.log(a);
    console.log(config.items[1].values);
    return (
        // var a = config.items[0].name.toString();
        <div className="md-grid">
        <TextField
            id="name"
            label={config.items[0].label.toString()}
            onChange={value => handleChange("name", value)}
            placeholder={config.items[0].label}
            value={name? name : a}
            className="md-cell md-cell--bottom form__input"
            inputClassName="font_size__normal"
        />

        <SelectField
            id="states"
            label={config.items[1].label}
            placeholder="Select state"
            className="md-cell md-cell--4  select-field"
            menuItems={config.items[1].values}
            position={SelectField.Positions.BELOW}
            simplifiedMenu={false}
        />

        <Button
            id="btn submit"
            label="SUBMIT"
            type="submit"
            primary
            flat
            className="button-class"
            onClick={onSubmit}
        />
        </div>
    );
};

export default Flexi;