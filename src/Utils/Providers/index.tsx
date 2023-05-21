import React, {ReactElement} from "react"
import ReactQueryProvider from "~/src/Utils/Providers/ReactQueryProvider";
import ReduxProvider from "~/src/Utils/Providers/ReduxProvider";
import MasterThemeProvider from "~/src/Utils/Providers/MasterThemeProvider.tsx";


interface IMainProviderProps {
    children: ReactElement
}

const MainProvider: React.FC<IMainProviderProps> = ({children}) => {
    return (<>
        <ReduxProvider>
                <ReactQueryProvider>
                    <MasterThemeProvider>
                        {children}
                    </MasterThemeProvider>
                </ReactQueryProvider>
        </ReduxProvider>
    </>)
}


export default MainProvider