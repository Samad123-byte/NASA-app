export default function Footer(props) {
    const {showModel, handleDisplayModel, data} = props
    return(
        <footer>
            <div className="bgGrad">

            </div>
            <div>
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleDisplayModel}>
            <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}