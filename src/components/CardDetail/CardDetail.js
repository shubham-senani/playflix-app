import { Link, useParams } from "react-router-dom"
import "./CardDetail.css"

const ShowSummary = ({data}) => {
    const {id} = useParams();
    const cardData = data.find((card) => card.show.id === Number(id))

    if(!cardData){
        return <div>Loading........</div>
    }

    return (
        <div className="container">
            <div className="show-card" style={{backgroundImage: `url(${cardData.show.image.original})`}}>
                <div className="show-card__overlay"></div>
                <div className="show-card__share">
                    <button className="show-card__icon"><i className="material-icons">&#xe87d;</i></button>
                    <button className="show-card__icon"><i className="material-icons">&#xe253;</i></button>
                    <button className="show-card__icon"><i className="material-icons">&#xe80d;</i></button>
                </div>
                <div className="show-card__content">
                    <div className="show-card__header">
                        <h1 className="show-card__title"> {cardData.show.name} </h1>
                        <h4 className="show-card__info">{cardData.show.premiered.substring(0,4)} {cardData.show.genres[0]}, {cardData.show.genres[1]}</h4>
                    </div>
                    <p className="show-card__desc">{cardData.show.summary.replace("<p>", "").replace("</p>", "")}</p>
                    <Link to={`/getTicket/${cardData.show.name}`} className="btn btn-outline show-card__button" type="button">Book Ticket</Link>
                </div>
            </div>
        </div>
    )
}

export default ShowSummary
