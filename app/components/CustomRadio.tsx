const CustomRadio = ({ ...props }) => {

    const rootClass = `opt-fap`;

    return (
        <div className={`${rootClass}-radio-block ${rootClass}-button`}>
            <input
                hidden
                type="radio"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                id={`${props.name}-${props.value}`}
            />
            <label htmlFor={`${props.name}-${props.value}`}>{props.value}</label>
        </div>
    )
    }

export default CustomRadio