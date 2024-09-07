import Cards from "../components/Card"
import Image from 'next/image';


export default function Home() {
    return (
        <>
            <h1 className="container mx-auto mt-6 pb-5 text-2xl font-bold">University Accomodation</h1>
            <br />

            <Cards />

            
        </>
    );
}
