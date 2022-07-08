import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../componets/layouts'

const PokemonDetail = () => {
  const router = useRouter();
  console.log(router.query.id)
  return (
    <Layout title="Some pokemon">
      <h1>Pokemon</h1>
    </Layout>
  )
}

export default PokemonDetail