export default function SideBar(props) {
    const {handleDisplayModel, data} = props
    return(
        <div className="sidebar">
            <div onClick={handleDisplayModel} className="bgLay"></div>
             <div className="sidebarContects">
            <h2>{data?.title}</h2>
            <div className="container">
                <p className="title">{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleDisplayModel}>
            <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    )
}