import Image from 'next/image';
import cardsData from './cardsData';

export default function Cards() {
    return (
        <div className="container mx-auto pb-8">
            <div className="flex flex-wrap -mx-4">
                {cardsData.map((card, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
                        <div className="max-w-sm overflow-hidden rounded shadow-lg">
                            <Image
                                src={card.imageUrl}
                                alt={card.title}
                                width={400} // Adjust width as needed
                                height={1} // Adjust height as needed
                                className="object-cover"
                            />
                            <div className="px-6 py-4">
                                <div className="mb-2 text-xl font-bold">{card.title}</div>
                                <p className="text-base text-gray-700">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
