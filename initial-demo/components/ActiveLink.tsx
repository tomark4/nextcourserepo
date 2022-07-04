import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    text: string;
    href: string;
}

const ActiveLink = ({text, href}:Props) => {

    const {pathname} = useRouter();

    return (
        <Link  href={href}>
            <a className={`nav-link ${ pathname === href ? ' active' : ''}`}>{text}</a>
        </Link>
    )
}

export default ActiveLink