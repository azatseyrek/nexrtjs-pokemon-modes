/* eslint-disable @next/next/no-img-element */
import {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = () => {
      fetch('https://jherr-pokemon.s3.amazonaws.com/index.json')
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
        });
    };
    getPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
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
