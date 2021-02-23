import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <div>
            <img src="https://nextfe.com/static/c2b50607a8ccad62506b78708a87efb5/2c512/5Gjro2OZN1A.jpg"></img>
        </div>
        <div>
            <h1 className="text-5xl font-black my-4">为什么 Tailwind 和我八字不合</h1>
            <time className="text-gray-500 text-xl">January 2, 2020</time>
        </div>
        <div>
            
        </div>
        <h2><Link href="/"><a className="text-blue-600">返回主页</a></Link></h2>
    </Layout>)
}