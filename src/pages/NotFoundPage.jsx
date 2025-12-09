import { Header } from '../components/Header.jsx';
import '../components/Header.css';
import './NotFoundPage.css';
export function NotFoundPage(){ 
    return(
        <>
             <title>Page Not Found</title>
            <Header />
                <div className="not-found-page" >
                    ERROR 404: PAGE NOT FOUND
                </div>
        </>
    )
}