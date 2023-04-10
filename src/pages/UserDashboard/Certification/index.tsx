import { AdminButton } from "@/common/components/Button";
import LayOutUser from "@/common/Layout/LayOutUser";
import axios from "axios";
import { Cookies } from "react-cookie";
import { AiOutlineDownload } from "react-icons/ai";

const Certification = () => {
  const cookie = new Cookies();
  const token = cookie.get("token");

  const getFile = async (e: any) => {
    axios
      .get("http://188.121.102.86:8081/api/user/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((user) => {
        axios.get(`http://188.121.102.86:8081/api/certificate/${user.data.id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
          .then((res) => res.data )
          .then((data:any) => {
            const a = document.createElement("a");
            a.href = data.path;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          })
      })
  };
  return (
    <div className="text-white h-full  flex justify-center items-center">
      <div className=" w-1/2 h-1/4 rounded-sm  flex items-center justify-center flex-col gap-10 border-slate-700 border-2 px-4">
        <p>برای دریافت گواهی خود روی لینک زیر کلید کنید</p>
        <AdminButton
          icon={<AiOutlineDownload />}
          type=""
          text="دانلودکنید"
          onClick={getFile}
        />
      </div>
    </div>
  );
};
Certification.getLayout = function getLayout(page: React.ReactElement) {
  return <LayOutUser>{page}</LayOutUser>;
};

export default Certification;
