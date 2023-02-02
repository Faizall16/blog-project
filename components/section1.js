import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css'
import Fetcher from "../lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"

export default function Section1() {

    const {data, isLoading, isError} = Fetcher('api/posts')
    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    SwiperCore.use([Autoplay]);

    return (
        <section className="py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-2xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay:5000
                    }}
                >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
        </section>
    )
}

function Slide({data}) {
    const{ id, published, image, title, body, image_publisher, name, email } = data;
    return (
        <div className="grid md:grid-cols-2 gap-7">
            <div className="image">
                <Link href={`/posts/${id}`}><Image src={image || "/"} width={600} height={600} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">{published || "/"}</Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</Link>
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
        </div>
    )
}