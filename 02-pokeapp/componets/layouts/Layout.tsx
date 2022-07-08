import Head from 'next/head'
import React, { PropsWithChildren, FC, ReactNode } from 'react'
import Navbar from '../ui/Navbar'

type Props = {
    title?: string
    children?: ReactNode
}

export const Layout: FC<PropsWithChildren<Props>> = ({title, children}) => {
    return (
      <>
        <Head>
            <title>{title || "Pokedex"}</title>
            <meta name="author" content="Jose" />
            <meta name="description" content="Poke app" />
            <meta name="keywords" content="nextjs, poke, pokedex" />
        </Head>

        <Navbar />

        <main className="content">
            {children}
        </main>

        <footer></footer>
      </>
    )
}
