import { Inter } from 'next/font/google'
import { useState } from 'react';
import Head from "next/head";
import Calcite from "../components/Calcite";
import styles from "../styles/Home.module.css";


export default function Home() {
  
  return (
    <>
     <div className={styles.container}>
      <Head>
        <title>Calcite in Next</title>
      </Head>
      <Calcite></Calcite>
      
      
    </div>
    </>
  )
}
