'use client'
import { ReactNode, useEffect, useState } from "react"
import { AccountInfo, EventType, IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from '../services/login/authConfig';
import { callMsGraph } from "../services/login/userGraph"
import ProfileContext from "@/context/ProfileContext";

interface ProfileProviderProps {
    children: ReactNode;
    instance: IPublicClientApplication;
}

//TODO hacer tipado de graphData

const ProfileProvider =({children, instance}:ProfileProviderProps)=>{
    const [graphData, setGraphData] = useState<any | undefined>(undefined);
    const [account, setAccount] = useState<AccountInfo | undefined>(undefined);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    
    useEffect(()=>{
        instance.addEventCallback((event: any) => {
            if (!account && event.eventType === EventType.LOGIN_SUCCESS && event.payload && event.payload.account) {
              const newAccount = event.payload.account;
              instance.setActiveAccount(newAccount);
              setAccount(newAccount);
              setIsLogged(true);
            }
            if( event.eventType === EventType.HANDLE_REDIRECT_END ){
                const newAccount = instance.getActiveAccount();
                if(newAccount){
                    setAccount(newAccount);
                    setIsLogged(true);
                }
            }
          });
    },[])

    useEffect(() => {
        const RequestProfileData = async () => {
            // Silently acquires an access token which is then attached to a request for MS Graph data
            const tokenResponse = await instance.acquireTokenSilent({...loginRequest,  account})
            const graphResponse = await callMsGraph(tokenResponse.accessToken)
             setGraphData(graphResponse);
        }
        if ( account ) RequestProfileData();
    },[ account ]);

    return(
        <ProfileContext.Provider value={{ graphData, isLogged }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;
