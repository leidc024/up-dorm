import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-green-800 to-black py-8 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Address Section */}
                <div className="md:col-span-1">
                    <div className="flex flex-col items-start">
                        <Image src="/up-footer.png" alt="UP Logo" className="w-40 mb-4" width={160} height={160} />
                        <h3 className="text-xl font-bold mt-4">University of the Philippines Cebu</h3>
                        <p>Lahug: Gorordo Avenue, Cebu City 6000</p>
                        <p>SRP: South Road Properties, Cebu City 6000</p>
                        <p>pio.upcebu@edu.ph</p>
                        <p>(032) 232 8187</p>
                    </div>
                </div>
                {/* Resources Section */}
                <div className="md:col-span-1 space-y-14">
                    <h3 className="text-xl font-bold">Resources</h3>
                    <ul className="space-y-5">
                        <li><a href="#" className="hover:underline">University of the Philippines System</a></li>
                        <li><a href="#" className="hover:underline">UP College Admission Test</a></li>
                        <li><a href="#" className="hover:underline">UP Cebu Eduroam</a></li>
                        <li><a href="#" className="hover:underline">University Virtual Education Commons</a></li>
                        <li><a href="#" className="hover:underline">University Library</a></li>
                    </ul>
                </div>
                {/* Policy Section */}
                <div className="md:col-span-1 space-y-14">
                    <h3 className="text-xl font-bold">Policy</h3>
                    <ul className="space-y-5">
                        <li><a href="#" className="hover:underline">UP Cebu Citizen&apos;s Charter</a></li>
                        <li><a href="#" className="hover:underline">NPC Registration</a></li>
                        <li><a href="#" className="hover:underline">Data Privacy</a></li>
                        <li><a href="#" className="hover:underline">Branding & Trademark Guide</a></li>
                    </ul>
                </div>
                {/* Other Links Section */}
                <div className="md:col-span-1 space-y-14">
                    <h3 className="text-xl font-bold">Other Links</h3>
                    <ul className="space-y-6">
                        <li><a href="#" className="hover:underline">Bid Opportunities</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>

                        <div className="flex mt-5 space-x-10">
                            <Link href="#">
                                <Image src="/seals.png" alt="Freedom of Information" className="w-25" width={100} height={100} />
                            </Link>
                            <Link href="#">
                                <Image src="/seals-1.png" alt="Transparancy Seal" className="w-25" width={100} height={100} />
                            </Link>
                            <Link href="#">
                                <Image src="/seals-2.png" alt="DPO/DPS" className="w-25" width={100} height={100} />
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
           
            <div className="flex justify-center mt-8 space-x-4">
                {/* Copyright */}
                <h3>Copyright All Rights Reserved &copy; 2024</h3>
            </div>
        </footer>
    );
}
