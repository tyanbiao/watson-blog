import Link from "next/link"
import Date from './date'

export default function PostCard(props) {
    const {title, id, description, date, cover} = props
    return (
        <Link href="/posts/[id]" as={`/posts/${id}`}>
        <a className="w-full mb-12 md:mb-8 block">
        <section className="flex w-full flex-col md:flex-row">
          <img className="w-full md:w-64" src={cover} />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl text-green-900	leading-tight text-opacity-80">{title}</h2>
            <p className="my-4 text-gray-600 text-base">{description}</p>
            <Date className="text-gray-500 text-xl" dateString={date} />
          </div>
        </section>
      </a>
      </Link>
    )
}