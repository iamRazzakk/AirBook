import Header from "./Header/Header";
import Featured from "./Featured";
import DealsAndOffer from "./DealsAndOffer";


export default function Home() {
    return (
        <div className="font-Inter">
            <Header></Header>
            <Featured></Featured>
            <div className="px-6">
                <DealsAndOffer></DealsAndOffer>
            </div>
        </div>
    )
}