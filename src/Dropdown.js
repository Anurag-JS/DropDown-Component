import { useState } from "react";

const Dropdown = () => {

    const [isActive, setActive] = useState(false);
    const [list] = useState(['Yes', 'Probably not']);
    const [value, setValue] = useState('');

    const onClickHandler = (e) => {
        setValue(e.target.textContent);
        setActive(false);
    }

    const onMouseHover = () => {
        setActive(true);
    }

    const results = list.map((result, index) => {
        return <a href="#" onClick={onClickHandler} key={index}>{result}</a>;
    })

    return (
        <div className="dropdown">
            <h1>Should you use a dropdown?</h1>
            <h3><strong>{value}</strong></h3>
            <button className="dropbtn" onMouseEnter={onMouseHover}>Select</button>
            <div className="dropdown-content" style={{ display: `${isActive ? 'block' : 'none'}` }}>
                {results}
            </div>
        </div>
    );
}

export default Dropdown;