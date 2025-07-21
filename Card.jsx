function Card(props){
    return (
        <div>
            <h2> welcome :{props.name}</h2>
            <p>City:{props.city}</p>
        </div>
    )
}
export default Card;