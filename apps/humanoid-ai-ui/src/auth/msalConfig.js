import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        clientId: 'f2edaf5b-61c2-42a9-9df5-479b6eddfa2f',
        authority: 'https://login.microsoftonline.com/a858d9da-8dfa-4b12-9f90-d0448a34f6d1',
        // redirectUri: 'https://resumeminner.azurewebsites.net/home',
        redirectUri: 'http://localhost:5173/',
        postLogoutRedirectUri: "/",
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
    },
    // system: {	
    //     loggerOptions: {	
    //         loggerCallback: (level, message, containsPii) => {	
    //             if (containsPii) {		
    //                 return;		
    //             }		
    //             switch (level) {
    //                 case LogLevel.Error:
    //                     console.error(message);
    //                     return;
    //                 case LogLevel.Info:
    //                     console.info(message);
    //                     return;
    //                 case LogLevel.Verbose:
    //                     console.debug(message);
    //                     return;
    //                 case LogLevel.Warning:
    //                     console.warn(message);
    //                     return;
    //                 default:
    //                     return;
    //             }	
    //         }	
    //     }	
    // }
}