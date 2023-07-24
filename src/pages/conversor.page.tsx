import { useState } from "react";
import { Label } from "../components/atoms/label/Label.Components"
import { Button } from "../components/atoms/button/button.components";

const Conversor = () => {

  const [centigrado, setCentigrado] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(0);

  const centigrados = () => {
    setFahrenheit((centigrado * 9 / 5) + 32)
  }

  const fahrenheits = () => {
    setCentigrado((fahrenheit - 32) * 5 / 9)
  }

  return (
    <main className="flex w-screen h-screen items-center justify-center bg-neutral-300">
      <div className="flex flex-col  p-5 rounded bg-slate-300 w-2/6 ">
        <h1 className="text-center text-2xl">CAMBIO DE GRADOS</h1>
        <Label label="centígrados" name="centígrados" type="text" value={centigrado.toString()} onChange={(e) => {
          if (e.target.value.length === 0) {
            setCentigrado(0)

          } if (parseInt(e.target.value) > 0) {
            setCentigrado(parseInt(e.target.value))
          }
        }
        } />
        <Label label="fahrenheit" name="fahrenheit" type="text" value={fahrenheit.toString()} onChange={(e) => {
          if (e.target.value.length === 0) {
            setFahrenheit(0)

          } if (parseInt(e.target.value) > 0) {
            setFahrenheit(parseInt(e.target.value))
          }
        }
        } />
        <div>
          <Button text="Cambio a fahrenheit" variant="filled" onClick={centigrados} />
          <Button text="Cambio a centigrados" variant="outlined" onClick={fahrenheits} />
        </div>

      </div>
    </main>
  )
}

export default Conversor