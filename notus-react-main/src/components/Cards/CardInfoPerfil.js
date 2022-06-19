import React,{Component} from "react";
import AuthService from "services/auth.service";

// components

export default class  CardInfoPerfil extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: null,
          userReady: false,
          currentUser: { username: "" }
        };
      }
    
      componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
    
        if (!currentUser) this.setState({ redirect: "/auth" });
        this.setState({ currentUser: currentUser, userReady: true })
      }

    render(){
        const { currentUser } = this.state;
    return (
        <>
         < div className = "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16" > <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                        <img
                            alt="..."
                            src={require("assets/img/team-1-800x800.jpg").default}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
                    </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                    <div className="flex justify-center py4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                            <span
                                className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                22
                            </span>
                            <span className="text-sm text-blueGray-400">Logros</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                            <span
                                className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                2
                            </span>
                            <span className="text-sm text-blueGray-400">Insignias</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h3
                    className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {currentUser.first_name+" "+currentUser.second_name}
                </h3>
                <div className="relative pt-1">
                <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                    className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    240 puntos semanales
                </div>
                <div className="mb-12 text-blueGray-600 mt-10">
                    <i className="fas fa-trophy mr-2 text-xl text-blueGray-400"></i>
                    <i className="fas fa-star mr-2 text-xl text-blueGray-400"></i>
                    <i className="fas fa-trophy-star mr-2 text-xl text-blueGray-400"></i>
                </div>
            </div>
        </div>
    </div>
</>
    );
    }
}
