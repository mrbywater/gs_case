import './Home.scss'
import {CatalogItem} from "../../components/formComponents/CatalogItem";

const Home = () => {

    return (
        <div>
            <CatalogItem
                price='341'
                title='Nice case!'
            />
        </div>
    )
}

export { Home }