
function Place(props){
    return(
        <div className="card">
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x1000/?"+props.img} />
                <div className={props.ratings>4.6 ? "best" : "d-none"}>Recommended Place</div>
            </div>
            <div className="card-body">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
            
        </div>
        
    )
};
export default Place;