import '@/app/profile.css'
import Image from 'next/image';
import React from 'react';

// 1. Tambahkan tipe properti untuk `Profile`
type ProfileProps = {
    id?: string;
};

const Profile: React.FC<ProfileProps> = ({ id }) => {
    return (
        // 2. Gunakan properti `id` di elemen root dari komponen `Profile`
        <div className="profile flex flex-col md:flex-row gap-4 p-4 h-screen items-center justify-center" id={id}>
            <div className="box-content flex-grow h-1/2 md:h-3/4 bg-black flex items-center justify-center">
                <Image src="/profile2.jpg" alt="Profile" className="rounded-full" width={500} height={500} />
            </div>
            <div className="box-content flex-grow h-1/2 md:h-3/4 bg-white p-4 flex items-center justify-center">
                <div className='namaProfile text-4xl'>
                    <h2 className="text-5xl font-bold">Nama Profil</h2>
                    <p>Nama : Gilang Arif Ramadhan</p>
                    <p>Tempat Lahir : Pontianak</p>
                    <p>Tanggal Lahir : 29 November 2001</p>
                    <p>Jenis Kelamin : Laki-Laki</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;