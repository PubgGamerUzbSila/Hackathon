import styles from "./Input.module.css"
export const Input = ({value, type }) => {
  return (
    <>
      <label > 
        {value}
        {type === "area" &&  <textarea ></textarea>}
        {type !== "area" &&  <input type={type}  />}
          
      </label>
    </>
  )
};
