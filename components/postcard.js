import Link from "next/link"

export default function PostCard(props) {
    const {title, link, description, date, cover} = props
    return (
        <Link href={link}>
        <a className="w-full  mb-6 block">
        <section className="flex w-full">
          <img className="w-60" src={cover} />
          <div className="ml-4">
            <h3 className="text-2xl text-indigo-900	leading-tight">{title}</h3>
            <p className="my-4 text-gray-600 text-base">{description}</p>
            <time className="text-gray-400">{date}</time>
          </div>
        </section>
      </a>
      </Link>
    )
}