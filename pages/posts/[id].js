import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import {getAllPostIds, getPostData} from '../../lib/posts'

export default function Post({postData}) {
  const {title, cover, date, contentHtml} = postData
  return (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <img src={cover}></img>
    </div>
    <div className="mb-8">
      <h1 className="text-5xl font-black my-8 text-opacity-90">{title}</h1>
      <Date className="text-gray-500 text-xl" dateString={date} />
    </div>
    <article dangerouslySetInnerHTML={{ __html: contentHtml }} className="prose w-full max-w-none" />
    <Link href="/"><a className="text-blue-400 underline text-xl block mt-8">返回主页</a></Link>
  </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id)
  return {
    props: {postData}
  }
}