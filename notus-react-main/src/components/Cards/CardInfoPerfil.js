import React,{useEffect,useState} from "react";
import AuthService from "services/auth.service";
import UserService from "services/user.service";
import ProgressBar from "@ramonak/react-progress-bar";
import ModalCambioDeAvatar from "components/Modals/ModalCambioDeAvatar";

// components

const getAvatar=()=>{
    const avatar = localStorage.getItem('avatar');
    if(avatar){
      return avatar;
    }else{
        return require("assets/img/default800x800.png").default;
    }
  }

export default function  CardInfoPerfil () {
    
    const [info, setInfo] = useState(false);
    const [badgeLength, setBadgeLength] = useState(0);
    const [open, setOpen] = useState(false);
    const userID = AuthService.getCurrentUser().id;

    const [imageSrc, setImageSrc] = useState(require("assets/img/default800x800.png").default);

    const handleAvatarClicked= row => {
        setOpen(true);
      };

      const getData = (imageSrc) => {
        setImageSrc(imageSrc);
      };

    useEffect(()=>{
        setImageSrc(getAvatar())
    },)

    useEffect(()=>{UserService.getInfoGamificacionPorId(userID).then(data => {
        setInfo(data);
        setBadgeLength(data.badges.length);
    }).catch(err => console.log(err));},)

    return (
        <>
        <ModalCambioDeAvatar setOpen={setOpen} open={open} getData={getData}/>
         < div className = "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" > <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                        <button
                        onClick={() => handleAvatarClicked()}>
                        <img
                            alt="Hola"   
                            src={imageSrc}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px cursor:pointer"/>
                            
                            </button>
                    </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                    
                </div>
            </div>
            <div className="text-center mt-6">
                <h3
                    className="text-xl font-semibold leading-normal mb-2 ml-3 text-blueGray-600 mb-2">
                      {"NIVEL:     "+info.level}
                </h3>
                <div className="relative pt-1">
                <div className="text-center mt-1 mb-2 pb-2">
                    <ProgressBar
                completed = {info.score}
                bgColor="#FFC300"
                labelColor="#000000"
                height="35px"
                labelAlignment="center"
                customLabel={Math.round(info.score)+" / "+ Math.round(info.limit_score)}
                maxCompleted={info.limit_score}/>


                  </div>
                </div>
                <div
                    className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    {info.weekly_score + " puntos semanales"}
                </div>
                <div className="mb-12 text-blueGray-600 mt-8">
                <div className="flex justify-center py4 lg: pt-4">
                        <div className="mr-4 p-3 text-center">
                        <img  src={require("iconos/icono_primero.png").default} /> x0
                        </div>
                        <div className="mr-4 p-3 text-center">
                        <img  src={require("iconos/icono_segundo.png").default} />x0
                        </div>
                        <div className="mr-4 p-3 text-center">
                        <img  src={require("iconos/icono_tercero.png").default} />x0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    );
    
}
