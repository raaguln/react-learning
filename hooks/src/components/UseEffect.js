import React, {useState, useEffect} from "react";

let UseEffect = (props) => {
    let [count, setCount] = useState(props.count ? props.count : 0)
    let [text, setText] = useState("Value")

    let increment = () => {
      setCount(count + 1)
    }
  
    let decrement = () => {
      setCount(count - 1)
    }
  
    let reset = () => {
      setCount(props.count)
    }

    useEffect(() => {
        console.log("Once after render and for any state / prop update")
    })

    useEffect(() => {
        console.log(`Only once after render`)
    }, [])

    useEffect(() => {
        console.log(`Once after render and then only when state of "count" modifies`)
        document.title = count
    }, [count])
  
    return (
      <div className="App">
        <p>{text} is { count }</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>+1</button>
        <button onClick={reset}>Reset</button>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
    );
}

export default UseEffect;