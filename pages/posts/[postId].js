import Format from "../../layout/format";
import Comment from "../../components/_child/comment";
import Image from "next/image";
import Link from "next/link";
import Fetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/spinner";
import Error from "../../components/_child/error";
import { useRouter } from "next/router";
import { ImCircleLeft } from "react-icons/im";
import { Typography } from "antd";

export default function Page() {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = Fetcher(`/api/posts/${postId}`);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  if (!data) return <Error />;

  return <Post {...data} />;
}

export function Post({
  id,
  published,
  image,
  title,
  body,
  image_publisher,
  name,
  email,
  comments,
  category,
  summary,
}) {
  return (
    <>
      <Format>
        <section className="container mx-auto md:px-2 py-4 w-1/2">
          <div className="grid grid-cols-[17rem_auto_17rem] items-center">
            <Link href={"/"}>
              <ImCircleLeft className="fill-black text-3xl" />
            </Link>

            <div className="author flex py-5">
              <Image
                src={image_publisher || "/"}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center px-4">
                <Link
                  href={"/"}
                  className="text-md font-bold text-gray-800 hover:text-gray-600"
                >
                  {name}
                </Link>
                <span className="text-sm text-gray-500">{email}</span>
              </div>
            </div>
          </div>

          <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">
              {title || "Title"}
            </h1>
            <div className="cat flex justify-center">
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">
                {published || "/"}
              </Link>
            </div>

            <div className="cat flex justify-center py-2">
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">
                {category || "/"}
              </Link>
            </div>

            <div className="py-10">
              <Image src={image || "/"} width={900} height={600} />
            </div>

            <div className="content text-gray-600 text-lg flex flex-col gap-4">
              <Typography.Title level={4}>Summary</Typography.Title>

              <p>{summary || ""}</p>

              <p className="text-gray-500 py-3">{body || "Body"}</p>
            </div>
          </div>
        </section>
        {comments ? <Comment {...comments} /> : ""}
      </Format>
    </>
  );
}
