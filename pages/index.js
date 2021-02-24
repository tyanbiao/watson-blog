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
      <header className="flex justify-center flex-col items-center	w-full bg-header-texture bg-center bg-cover bg-no-repeat">
        <img src="/images/photo.jpg" className="rounded-full w-36 mx-0 mt-4"/>
        <h1 className="text-5xl font-bold	leading-normal text-blue-600 my-4 text-shadow text-center">Watson's Blog</h1>
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
  const data = [
   {
      title: '不满意社区的轮子，我们自创了一套 React Hooks 风格的数据加载方案',
      id: '#1',
      description: '如何基于项目实际需求抽象出一套足够简单又方便组合的 React Hooks 风格数据加载方案',
      cover: 'https://nextfe.com/static/419b4c10b0c4e26ab032c724c162b420/2c512/yo5s1-YvYVY.jpg',
      date: '2021-12-14'
    },
    {
      title: '面向开发者的播客清单',
      id: '#2',
      description: 'LeanCloud 工程师都听什么播客',
      cover: 'https://nextfe.com/static/f07d94e5365ad8cc532f767683d6d6a6/2c512/7Uk-DPd0fZY.jpg',
      date: '2021-12-14'
    },
    {
      title: '开源技术够用了么？我的 NAS 选型与搭建过程',
      id: '#3',
      description: '群辉这么香，为什么还要自己搭 NAS',
      cover: 'https://nextfe.com/static/ab42853de716da38c8154dbbf6170b83/7dac8/gen-10.png',
      date: '2021-12-14'
    }
  ]
  const allPostsData = getSortedPostsData().concat(data)
  return {
    props: {allPostsData}
  }
}