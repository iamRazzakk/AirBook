import Header from "./Header/Header";
import Featured from "./Featured";
import DealsAndOffer from "./DealsAndOffer";
import PopularAirlines from "./PopularAirlines";
import Testimonials from "./Testimonials";
import TravelBlogs from "./TravelBlogs";
import Subscribe from "./Subscribe";
import Footer from "./Footer";


export default function Home() {
    return (
        <div className="font-Inter">
            <Header></Header>
            <Featured></Featured>
            <div className="h-[350px]">
                <DealsAndOffer></DealsAndOffer>
            </div>
            <PopularAirlines></PopularAirlines>
            <Testimonials></Testimonials>
            <TravelBlogs></TravelBlogs>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    )
}