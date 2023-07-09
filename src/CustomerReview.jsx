import './CustomerReview.css'
function CustomerReview(props){
    return(
        <div className="review-box">
           <p>{props.text}</p>
            <div>
                <div className='brand-logo'><img src="#" /></div>
                <div>
                    <p className="name">{props.name}</p>
                    <p className="title">{props.title}</p>
                </div>
            </div>
        </div>
    )
}
export default CustomerReview