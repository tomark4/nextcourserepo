import { Button } from '@nextui-org/react'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from './componets/layouts'
import pokeApi from '../data/api';

const HomePage:NextPage = (props) => {

  return (
    <Layout title="My PokedexApp">
      <h1>Homepage</h1>
      <Button color="gradient">hola mundo</Button>
    </Layout>
  )
}

/** only used in pages */
export async function getStaticProps(){
  const { data } = await pokeApi.get(`/pokemon?limit=151`);

  return {
    props: { pokemons: data.results }
  }
}

export default HomePage