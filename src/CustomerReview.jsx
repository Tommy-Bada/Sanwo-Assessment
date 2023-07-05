function CustomerReview(props){
    return(
        <>
           <p>{props.text}</p>
            <div>
                <div><img src="#" /></div>
                <div>
                    <p>{props.name}</p>
                    <p>{props.title}</p>
                </div>
            </div>
        </>
    )
}
export default CustomerReview