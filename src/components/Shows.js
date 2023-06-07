import ShowCard from "./ShowCard/Card";

const Shows = ({data}) => {

    return (
            data.map((item) => 
                <ShowCard key={item.show.id} item={item} />
           )
        
    )
}

export default Shows
