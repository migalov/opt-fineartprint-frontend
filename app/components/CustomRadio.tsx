import Image from "next/image";
import iconQuestion from "@/public/question.svg";

const CustomRadio = ({ ...props }) => {

    const rootClass = `opt-fap`;

    return (
        <div className={`${rootClass}-radio-block ${rootClass}-button${ props?.tooltip ? ` ${rootClass}-has-tooltip` : ""}`}>
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
            {
                props?.tooltip &&
                <>
                    <Image
                        className={`icon-toolip ${rootClass}-button__icon-tooltip`}
                        width={11}
                        height={11}
                        src={iconQuestion}
                    />
                    <span className={`tooltip-text ${props?.tooltipPosition && `tooltip-text--${props.tooltipPosition}`}`} >{props.tooltip}</span>
                </>
                    
                
            }
            
        </div>
    )
    }

export default CustomRadio