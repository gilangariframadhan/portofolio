import React from "react"

type ContactProps = {
    id?: string
}

const Contact: React.FC<ContactProps> = ({ id }) => {
    return (
        <div className="profile flex flex-col md:flex-row gap-4 p-4 h-screen items-center justify-center" id={id}>
            <div className="box-content flex-grow h-1/2 md:h-3/4 bg-white p-4 flex items-center justify-center">
                <div className='namaProfile text-4xl'>
                    <h2 className="text-5xl font-bold mb-3">My Contact</h2>
                    <a href="https://www.linkedin.com/in/gilang-arif-ramadhan-249031236/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/assetsSosmed/linkedin.png" width="40" height="40" style={{ marginRight: '10px', marginTop: '10px', marginBottom: '10px' }} />
                        <span>Gilang Arif Ramadhan</span>
                    </a>
                    <a href="https://www.instagram.com/gilangariframadhan/" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/assetsSosmed/instagram.png" width="40" height="40" style={{ marginRight: '10px', marginTop: '10px', marginBottom: '10px' }} />
                        <span>@gilangariframadhan</span>
                    </a>
                    <a href="https://t.me/gilangariframadhan" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/assetsSosmed/telegram.png" width="40" height="40" style={{ marginRight: '10px', marginTop: '10px', marginBottom: '10px' }} />
                        <span>@gilangariframadhan</span>
                    </a>
                    <a href="https://wa.me/089694337344" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/assetsSosmed/whatsapp.png" width="40" height="40" style={{ marginRight: '10px', marginTop: '10px', marginBottom: '10px' }} />
                        <span>089694337344</span>
                    </a>
                </div>
            </div>
            <div className="box-content flex-grow h-1/2 md:h-3/4 bg-black flex items-center justify-center">
                <img src="/profile2.JPG" alt="Profile" className="rounded-full" width="500" height="500" />
            </div>
        </div>
    )
}

export default Contact;