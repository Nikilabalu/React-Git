import {useState} from "react"
function App() {
    const [data,setData]=useState('Hello')
    const handleGreet =() =>
    {
        setData('Hi')
        console.log('State Updated')
    }
    return(
        <>
        <p>{data}</p>
        <button onClick={handleGreet}>Greet !</button>
        </>
    );
}
export default App;