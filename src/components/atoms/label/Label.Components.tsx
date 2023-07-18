//rafc
//Interface donde se definen todas las propiedades del componente
interface LabelProps {
  label: string | number;
  name: string;
  type?: "text" | "password" | "email" ,
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Label: React.FC<LabelProps> = ({ label, name, type= "text", value, onChange}) => {
  //variables para almacenar las clases en Tailwind
  let labelStile = "text-black";
  let inputStyle = "border-2 rounded-lg border-gray-500";


  return (
    <>
      <label className={labelStile}>
        {label}
      </label>
      <input type={type} name={name} id={name} className={inputStyle} value={value} onChange={onChange} />
    </>
  )
}