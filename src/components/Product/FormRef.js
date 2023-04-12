import React , {useState ,useRef} from 'react'

function FormRef() {
    const [value, setvalue] = useState(null);
    const entername = useRef(null)
    const submitvalue =(e)=>{
        e.preventDefault();
        setvalue(entername.current.value)
    }
  return (
    <>
      <form onSubmit={submitvalue}>
        <label htmlFor="entervalue">Enter Your name</label>
        <input type="text" id='entervalue' ref={entername} />
        <button>Submit</button>
      </form>

      <div>
        <p>You name is {value}</p>
      </div>
    </>
  )
}

export default FormRef
