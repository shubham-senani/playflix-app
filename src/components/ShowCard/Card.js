import { Link } from "react-router-dom"
import "./Card.css"

const ShowCard = ({item}) => {
  return (
    <Link to={`/detail/${item.show.id}`}>
    {/* movie-card */}
	<div className="movie-card">

        {/* movie-header */}
		<div className="movie-header">
            <img className="image" src={item.show.image.original} alt="" />
		</div>

        {/* movie-content */}
		<div className="movie-content">
			<div className="movie-content-header">
				<a href="#">
					<h3 className="movie-title">{item.show.name}</h3>
				</a>
				<div className="imax-logo">{item.show.type}</div>
			</div>
			<div className="movie-info">

                {/* Genres */}
				<div className="info-section">
					<label>Genres</label>
					<span>{item.show.genres[0]}</span>
				</div>

                {/* Language */}
				<div className="info-section">
					<label>Language</label>
					<span>{item.show.language}</span>
				</div>

                {/* Rating */}
				<div className="info-section">
					<label>Rating</label>
					<span>{item.show.rating.average}</span>
				</div>

                {/*seat*/}
				<div className="info-section">
					<label>Seat</label>
					<span>21,22</span>
				</div>

			</div>
		</div>
	</div>
</Link>
  )
}

export default ShowCard
