//rafc
//Interface donde se definen todas las propiedades del componente
interface LabelProps {
  label: string | number;
  name: string;
  type?: "text" | "password" | "email" ,
  value?: string
  variant?: "mensaje" | "normal"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Label: React.FC<LabelProps> = ({ label, name, type= "text", value, onChange, variant}) => {
  //variables para almacenar las clases en Tailwind
  let labelStile = "text-sky-600 font-medium";
  let inputStyle = "border-2 rounded-lg border-sky-600 text-sky-600 font-medium w-80";
  
  
  if (variant === "mensaje"){
    inputStyle = `${inputStyle} h-48`

} else {
    inputStyle = `${inputStyle}`
}

  return (
    <>
      <label className={labelStile}>
        {label}
      </label>
      <input type={type} name={name} id={name} className={inputStyle} value={value} onChange={onChange} />
    </>
  )
}