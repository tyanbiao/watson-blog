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
    <div>
      <h1 className="text-5xl font-black my-4">{title}</h1>
      <Date className="text-gray-500 text-xl" dateString={date} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    <h2><Link href="/"><a className="text-blue-600">返回主页</a></Link></h2>
  </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  console.log(params)
  const postData = await getPostData(params.id)
  return {
    props: {postData}
  }
}