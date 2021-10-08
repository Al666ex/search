import React, {useState, useEffect} from 'react'

const people = ['al', 'alll', 'fd', 'alo', 'alldar']

const AppTest = () => {
    const [word, setWord] = useState('')
    const [result, setResult] = useState([])

    const handle = (e) => {
        setWord(e.target.value)
    }

    useEffect(() => {
        const res = people.filter(item => item.toLowerCase().includes(word))
        setResult(res)
    },[word])

    return(
        <main className="main row">
            <div className="col">
                <input
                    placeholder="Search"
                    type="text"
                    value={word}
                    onChange={handle}
                />
                <ul>
                    {result.map(item => <li key={item}>{item}</li>)}
                </ul>                
            </div>
            <div className={"col"}>
                <ul>
                    {people.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </main>    
    )
}

export default AppTest;