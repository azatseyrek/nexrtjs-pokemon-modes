/* eslint-disable @next/next/no-img-element */
import {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export async function getServerSideProps() {
  const resp = await fetch('https://jherr-pokemon.s3.amazonaws.com/index.json');
  const pokemon = await resp.json();
  return {
    props: {
      pokemon: pokemon,
    },
  };
}

export default function Home(props) {
  const {pokemon} = props;

  console.log(pokemon);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List - SSR</title>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div key={pokemon.id} className={styles.card}>
            <Link href={`pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https:jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
