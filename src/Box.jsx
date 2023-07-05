function Box(props){
    return(
        <section>
           <h3>{props.number}</h3>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
        </section>
    )
}
export default Box