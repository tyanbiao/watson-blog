import Head from 'next/head'
import Layout from '../components/layout'
import PostCard from '../components/postcard'
import {getSortedPostsData} from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>Watson's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-center flex-col items-center	w-full bg-header-texture bg-bottom bg-cover bg-no-repeat">
        <img src="/images/head.png" className="rounded-full w-36 mx-0 mt-4"/>
        <h1 className="text-5xl font-bold	leading-normal text-green-500 my-4 text-shadow text-center">Watson's Blog</h1>
      </header>
      <main className="w-full mt-12">
        {
          allPostsData.map(({id, ..._props}) => <PostCard {..._props} key={id} id={id} />)
        }
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {allPostsData}
  }
}