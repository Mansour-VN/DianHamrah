import { AiOutlineInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { RiTelegramLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';

const SocialMedial = () => {
    return (
        <>
            <div className="w-full">
                <div className='flex flex-row gap-2 flex justify-center items-center'>
                    <a href="https://api.whatsapp.com/send?phone=989045736529&text=سلام وقت بخیر"
                       className="text-xl rounded-full bg-green-700 p-2 text-white
                        transition ease-in-out delay-150 hover:scale-110 hover:bg-green-600 duration-300">
                        <BsWhatsapp />
                    </a>

                    <a href="https://instagram.com/dianhamrahefarda?igshid=Yzg5MTU1MDY="  className="text-xl rounded-full bg-rose-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-rose-600 duration-300
                    ">
                        <AiOutlineInstagram />
                    </a>
                    <a href="https://t.me/dianhamrahefarda" className="text-xl rounded-full bg-blue-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-600 duration-300
                    ">
                        <RiTelegramLine />
                    </a>

                    <a href="mailto:info@dianhamrah.ir?subject=test&body=test" target="_top" className="text-xl rounded-full bg-yellow-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-yellow-600 duration-300
                    ">
                        <HiOutlineMail />
                    </a>

                    <a href="tel:+982196646" className="text-xl rounded-full bg-neutral-700 p-2 text-white
                    transition ease-in-out delay-150 hover:scale-110 hover:bg-neutral-600 duration-300
                    ">
                        <TbPhoneCall />
                    </a>
                </div>
            </div>
        </>

    );
}

export default SocialMedial;