import Avatar from "@/components/Avatar/Avatar"
import nima from "@/../public/assets/images/Team/team_img01.png"
import raha from "@/../public/assets/images/Team/team_img02.png"
import mohamad from "@/../public/assets/images/Team/team_img03.png"
import mina from "@/../public/assets/images/Team/team_img04.png"
const Secton3 = () => {
    return (
        <div className=" mx-auto container flex flex-row justify-between ">
            <Avatar name={"نیما نویدی"} title={"موسس"} image={nima}/>
            <Avatar name={"رها امینی"} title={"طراح"} image={raha}/>
            <Avatar name={"محمد محمدی"} title={"مدیرعامل"} image={mohamad}/>
            <Avatar name={"مینا اسدی"} title={"توسعه دهنده"} image={mina}/>

        </div>
    )
}

export default Secton3