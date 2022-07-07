import { FC, ReactNode } from 'react'


type Props = {
    children?: ReactNode
};

const DarkLayout: FC<Props> = ({children}) => {
    return (
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: "10px", borderRadius: "5px" }}>
            <h3>Dark layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}

export default DarkLayout