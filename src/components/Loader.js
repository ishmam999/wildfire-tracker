import giphy from './giphy.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={giphy} alt="loading" />
            <h3>Fetching Data</h3>
        </div>
    )
}

export default Loader
