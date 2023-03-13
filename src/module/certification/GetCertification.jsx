const GetCertification = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">شرکت فلان خوش اومدی</h1>
                    <p className="mb-5">شما موفق به گذراندن دوره شده اید، امیدواریم که کسب و کار شما برای آبادانی ایرانی بهتر رو به پیشرفت باشه</p>
                    <button  className="w-full btn flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">دانلود گواهی</button>
                </div>
            </div>
        </div>
    )
}

export  default  GetCertification;