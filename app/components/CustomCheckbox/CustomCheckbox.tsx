import { ICustomCheckbox } from "./CustomCheckbox.interface"
import styles from "./CustomCheckbox.module.scss"

const CustomCheckbox = ({ children, name, isChecked, onChange }:ICustomCheckbox) => {
  return (
    <label className={`${styles[`opt-fap-custom-checkbox-wrapper`]}`}>
      <input
        type="checkbox"
        className={`${styles[`opt-fap-custom-checkbox-element`]}`}
        name={name}
        id=""
        checked={isChecked}
        onChange={() => onChange((prev: boolean) => !prev)}
        />
      <p>{ children }</p>
    </label>
  )
}

export default CustomCheckbox
