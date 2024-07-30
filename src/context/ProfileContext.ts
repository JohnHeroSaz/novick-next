import { createContext } from "react";

interface IProfileContext {
    graphData: any;
    isLogged: boolean;
}

const ProfileContext = createContext<IProfileContext>({} as IProfileContext);

export default ProfileContext;
