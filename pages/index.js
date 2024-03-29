import { getClient } from "../lib/sanity.server"
import groq from "groq"
import Head from 'next/head'
import Beer from '../components/beer';


const Home = ({beers}) => {
  console.log(beers)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/jpn8kiv.css" />
        <link rel="stylesheet" href="https://use.typekit.net/jpn8kiv.css" />
      </Head>
      <div className="tvmenu">
        <div className="left-side">
          {beers?.map((beer) => (
            <Beer key= {beer._id} beer={beer}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({preview = false}) {
  const beers = await getClient(preview).fetch(groq`
    *[_type == "beer"]{
    _id,
    beerName,
    beerType,
    beerABV,
    beerIBU,
    beerLowPrice,
    beerHighPrice,
    breweryLogo,
    newBeer,
    soldBeer,
    publishedAt
    }
    
  `)
  return {
    props: {
      beers,
    },
    revalidate: 1,
  }
}

export default Home
