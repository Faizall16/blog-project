import Image from "next/image"
import Link from "next/link"
import Fetcher from "../lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function Section2() {

    const {data, isLoading, isError} = Fetcher('api/posts')
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-2xl py-12 text-center">Latest Posts</h1>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                   data.map((value, index) => (
                    <Posts data={value} key={index}></Posts>
                   ))
                }
            </div>
        </section>
    )
}

function Posts( {data} ){
    const{ id, published, image, title, body, image_publisher, name, email } = data;
    return (
        <div className="item">
            <div className="image">
                <Link href={`/posts/${id}`}><Image src={image || "/"} className="rounded" width={500} height={350} /> </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">{published || "Unknown"}</Link>
            </div>
            <div className="title">
                <Link href={`/posts/${id}`} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</Link>
            </div>
            <p className="text-gray-500 py-3">
                {body || "Body"}
            </p>
            <div className="author flex py-5">
                <Image src={image_publisher || "/"} width={60} height={60}  className="rounded-full"></Image>
                <div className="flex flex-col justify-center px-4">
                    <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">{name}</Link>
                    <span className="text-sm text-gray-500">{email}</span>
                </div>
            </div>
        </div>
    )
}