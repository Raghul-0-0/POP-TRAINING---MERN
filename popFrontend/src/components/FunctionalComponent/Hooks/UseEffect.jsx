import { use } from "react"

const UseEffect = () => {
    var[text,setText]=useState("")
    return (
        <section>
            <h1>This is UseEffect Example</h1>
            Type your text<input type="text" />
        </section>
    )
}

export default UseEffect;
