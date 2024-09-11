function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
            })}
        </ul>
    )
}

export default function Animals() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"]
    // const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals}/>
        </div>
    )
}