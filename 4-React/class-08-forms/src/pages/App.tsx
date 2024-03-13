import { SubmitHandler, useForm, } from "react-hook-form"

type Inputs = {
  name: string
  email: string
}

export function App() {
  const { register, handleSubmit,formState: { errors }, reset, watch,} = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset()
    };

    console.log(watch("name"));
    console.log("render");
    

  return(
    <>
      <h1>Class 08 forms</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
        <label>
          Name: 
          <input type="text" {...register("name", {required: "Campo obrigatório!", minLength: {value: 3, message: "Mínimo de três caracteres"}, })}/>
        </label>
        
        <div style={{fontSize: 10, color: "red", position: "absolute"}}>{errors.name?.message}</div>

        </section>

        <br />
        
        <section>
        <label>
          Email: 
          <input type="email" {...register("email", {required: "Campo obrigatório!", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Endereço de email inválido"}})}
          />
        </label>
        
        <div style={{fontSize: 10, color: "red", position: "absolute"}}>{errors.email?.message}</div>

        </section>
        <br />
        <br />
        
        <div>
            <button>Enviar</button>
        </div>
      </form>
    </>
  )
}