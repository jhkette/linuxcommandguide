import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="flex flex-col flex-1">
        <div className="w-screen bg-blue-400 border-solid border-light-blue-500 ">
          <div className="container flex flex-col py-24 ">
            <h1 className="py-8 font-serif text-6xl">Folder naviagation </h1>
            <p className="text-xl leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              temporibus qui laboriosam exercitationem quisquam architecto
              libero nam suscipit sed numquam? Saepe ex nisi culpa mollitia fuga
              beatae, dolores at fugiat. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sapiente nisi quisquam voluptatem placeat
              incidunt tempore? Rerum eum, consectetur natus obcaecati explicabo
              reprehenderit quos possimus laboriosam, nemo ab est, fuga
              deserunt!
            </p>
            <div className="p-4 my-10 bg-gray-900 rounded-md">
            <p className="font-mono text-xl text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </div>
          </div>
        </div>
        <div className="w-screen bg-gray-400 border-solid border-light-blue-500 ">
          <div className="container flex flex-col py-24 ">
            <h1 className="py-8 font-serif text-6xl">Folder naviagation </h1>
            <p className="text-xl leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              temporibus qui laboriosam exercitationem quisquam architecto
              libero nam suscipit sed numquam? Saepe ex nisi culpa mollitia fuga
              beatae, dolores at fugiat. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sapiente nisi quisquam voluptatem placeat
              incidunt tempore? Rerum eum, consectetur natus obcaecati explicabo
              reprehenderit quos possimus laboriosam, nemo ab est, fuga
              deserunt!
            </p>
            <div className="p-4 my-10 bg-gray-900 rounded-md">
            <p className="font-mono text-xl text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </div>
          </div>
        </div>
        <div className="w-screen bg-red-400 border-solid border-light-blue-500 ">
          <div className="container flex flex-col py-24 ">
            <h1 className="py-8 font-serif text-6xl">Folder naviagation </h1>
            <p className="text-xl leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              temporibus qui laboriosam exercitationem quisquam architecto
              libero nam suscipit sed numquam? Saepe ex nisi culpa mollitia fuga
              beatae, dolores at fugiat. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sapiente nisi quisquam voluptatem placeat
              incidunt tempore? Rerum eum, consectetur natus obcaecati explicabo
              reprehenderit quos possimus laboriosam, nemo ab est, fuga
              deserunt!
            </p>
            <div className="p-4 my-10 bg-gray-900 rounded-md">
            <p className="font-mono text-xl text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
