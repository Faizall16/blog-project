import Format from '../../layout/format'
import Comment from '../../components/_child/comment'
import Image from 'next/image'
import getPost from "../../lib/helper"
import Link from 'next/link'
import Fetcher from '../../lib/fetcher'
import Spinner from '../../components/_child/spinner'
import Error from '../../components/_child/error'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import { ImCircleLeft } from "react-icons/im";

export default function Page({ fallback }) {
    const router = useRouter()
    const {postId} = router.query;
    const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`)

    if(isLoading) return <Spinner></Spinner>
    if(isError) return <Error></Error>

    return (
        <SWRConfig value={{ fallback }}>
            <Post {...data}></Post>
        </SWRConfig>
    )
}

export function Post({ id, published, image, title, body, image_publisher, name, email, comments }) {
    return (
    <Format>
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm-order-1 flex py-4 sm:py-0">
                <Link href={"/"}><ImCircleLeft className='fill-black text-3xl' /></Link>
            </div>
        </div>
        <section className='container mx-auto md:px-2 py-4 w-1/2'>
            <div className='flex justify-center'>
                <div className="author flex py-5">
                    <Image src={image_publisher || "/"} width={60} height={60}  className="rounded-full"></Image>
                    <div className="flex flex-col justify-center px-4">
                        <Link href={"/"} className="text-md font-bold text-gray-800 hover:text-gray-600">{name}</Link>
                        <span className="text-sm text-gray-500">{email}</span>
                    </div>
                </div>
            </div>
            <div className='post py-10'>
                <h1 className='font-bold text-4xl text-center pb-5'>{title || "Title"}</h1>
                <div className="cat flex justify-center">
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">{published || "/"}</Link>
                </div>
                <div className='py-10'>
                    <Image src={image || "/"} width={900} height={600}></Image>
                </div>
                <div className='content text-gray-600 text-lg flex flex-col gap-4'>
                    <p>{body || "Body"}</p>
                </div>
            </div>
        </section>
        { comments ? <Comment {...comments}></Comment> : <></>}
    </Format>
    )
}

export async function getStaticProps({ params }) {
    const Posts = await getPost(params.postId)
    return {
        props : {
            fallback : {
                '/api/posts' : Posts
            }
        }
    }
}

export async function getStaticPaths() {
    const Posts = await getPost()
    const paths = Posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })

    return {
        paths,
        fallback:false
    }
}