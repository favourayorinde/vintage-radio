import React, { useEffect } from 'react'

const Dropdown = ({ selectedOption, setSelectedOption }) => {

    const options = [
        { value: "BodyHull", label: "Outer Body", },
        { value: "MiddleRim", label: "Middle Rim", },
        { value: "Grill", label: "Grill", },
        { value: "BackPanel", label: "Back Panel", },
        { value: "KnobRim", label: "Knob Rim", },
        { value: "Knobs", label: "Knobs", },
        { value: "RodHandle", label: "Rod Handle", },
        { value: "RubberHandle", label: "Rubber Handle", },
        { value: "HandlePadding", label: "Handle Padding", },
        { value: "Band", label: "Band", },
        { value: "KnobMarker", label: "Knob Marker", },
        { value: "Screen", label: "Screen", },
        { value: "DisplayText", label: "Display Text", },
    ]

    useEffect(() => {
        handleSeletion({ target: { value: 'BodyHull' } })
    }, [])

    function handleSeletion(event) {
        setSelectedOption(event.target.value)
    }

    return (
        <select
            value={selectedOption}
            onChange={handleSeletion} className='select'>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Dropdown