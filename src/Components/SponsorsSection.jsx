import React from 'react';

const SponsorsSection = () => {
    const sponsors = [
        {
            "id": 1,
            "name": "Grameen Bank",
            "logo": "https://i.ibb.co.com/rxhLN1X/grameen-13893-portrait-medium.jpg"
        },
        {
            "id": 2,
            "name": "BRAC",
            "logo": "https://i.ibb.co.com/5KTnGBn/images-q-tbn-ANd9-Gc-SGk-REod-Krxo-M8-Nn-Jy1-Y3-BJd0-X6f-A3-PEEUy-Fg-s.png"
        },
        {
            "id": 3,
            "name": "Bangladesh Red Crescent Society",
            "logo": "https://i.ibb.co.com/HNVGcXK/images-q-tbn-ANd9-Gc-Rn-WEe-Pgqy-SC0h9-Nl-Fnfka3ecpk-EIZ8v-QLA-s.png"
        },
        {
            "id": 4,
            "name": "JAAGO Foundation",
            "logo": "https://i.ibb.co.com/hL5ng83/jaago-foundation.jpg"
        },
        {
            "id": 5,
            "name": "Startup Bangladesh Limited",
            "logo": "https://i.ibb.co.com/WxKZV63/1630669883052-e-2147483647-v-beta-t-Rj-S26-H-3r9n12rlus-C02-D94-Z-vgay-Tl-RSr0u-Da-Lnml4.jpg"
        },
        {
            "id": 6,
            "name": "Robi Axiata Limited",
            "logo": "https://i.ibb.co.com/H4CGkn3/images-q-tbn-ANd9-Gc-Sh-B-9f-KPENE9q-OFAe-YLn-2je-Gl-X2-Zrs-PCl-Nw-s.jpg"
        },
        {
            "id": 7,
            "name": "Bashundhara Group",
            "logo": "https://i.ibb.co.com/FD18j89/images-q-tbn-ANd9-Gc-T-Zjvi-UDpti-VQI7q-IDOr-DIo-Fv-V0-Z0w-W9gs7g-s.png"
        },
        {
            "id": 8,
            "name": "United Commercial Bank (UCB)",
            "logo": "https://i.ibb.co.com/KFsLZp8/images-q-tbn-ANd9-Gc-TUbc-BSSHJHOWGB6o-ACBBtb-xk-Yv-XKZn-ZYV7-A-s.png"
        },
        {
            "id": 9,
            "name": "Shikho",
            "logo": "https://i.ibb.co.com/8zhYmDL/651548cae8ac3849400a0da0-Shikho-Logo-02-01-removebg-preview.png"
        },
        {
            "id": 10,
            "name": "Pathao",
            "logo": "https://i.ibb.co.com/D9dLX2R/images-q-tbn-ANd9-Gc-QDYA0mh-FNAfz-FTKy-Lkw-Un-t8o-Dva-W-g-T-R2-Q-s.png"
        }
    ];

    return (
        <div className='my-10'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>RunWay Sponsors</h1>
                    <p className='text-gray-500 text-base md:text-lg my-5'>RunWay Sponsors are key organizations and brands that support marathons, providing funding, resources, and promotions. Their contributions help enhance the runner experience and ensure successful, impactful events.</p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center'>
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className='border-2 w-32 h-32  md:w-40 md:h-40 my-5 rounded-xl flex justify-center items-center border-y-gray-400'>
                            <div className=''>
                                <img className='w-20 h-20 md:w-24 md:h-24 mx-auto rounded-xl' src={sponsor.logo} alt={sponsor.name} />
                                <h1 className='text-sm font-semibold text-center'>{sponsor.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default SponsorsSection;
