import './Box.css'
function Box(props){
    return(
        <section className='box'>
           <h3 className='number' style={{backgroundColor:props.bgcolor, color:props.color}}>{props.number}</h3>
            <h3 className='header'>{props.header}</h3>
            <p className='text'>{props.text}</p>
        </section>
    )
}
export default Box