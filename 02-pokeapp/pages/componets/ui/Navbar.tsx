import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";

const Navbar = () => {
    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '20px',
            flexDirection: 'row',
            backgroundColor: theme?.colors.gray300.value
        }}>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" 
            alt="" width={70} height={70}/>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>

            <Spacer css={{ flex: 1 }}/>

            <Text color="white">Favoritos</Text>
        </div>
    )
}

export default Navbar