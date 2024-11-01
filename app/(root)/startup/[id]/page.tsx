import { Suspense } from "react"
import { formatDate } from "@/lib/utils"
import { client } from "@/sanity/lib/client"
import { FIND_STARTUP_BY_ID } from "@/sanity/lib/queries"
import { notFound } from "next/navigation"

import Link from "next/link"
import Image from "next/image"

import markdownit from "markdown-it"
import { Skeleton } from "@/components/ui/skeleton"
import View from "@/app/components/View"

const md = markdownit()

const page = async ( { params }: { params: Promise<{ id: string }>} ) => {

      const id = (await params).id
      const post = await client.fetch(FIND_STARTUP_BY_ID, { id })

      const parsedContent = md.render(post?.pitch || '')


      if (!post) {
            return notFound()
      }

      return (
            <>
                  <section className="pink_container !min-h-[230px]">
                        <p className="tag">{formatDate(post?._createdAt)}</p>

                        <h1 className="heading !max-w-[400px]">{post.title}</h1>
                        <p className = "sub-heading !max-w-5xl">{post.description}</p>
                  </section>

                  <section className="section_container">
                        {post?.image && (
                              <img
                                    src={post.image}
                                    alt="Thumbnail"
                                    className="w-3/4 h-auto rounded-xl mx-auto"
                              />
                        )}

                        <div className = "space-y-5 mt-10 max-w-4xl mx-auto">
                              <div className = "flex-between gap-5">
                                    {post?.founder?.image && (
                                          <Link
                                          href={`/user/${post.founder?._id}`}
                                          className="flex gap-2 items-center mb-3"
                                          >
                                                <Image
                                                      src={post.founder.image}
                                                      alt="avatar"
                                                      width={64}
                                                      height={64}
                                                      className="rounded-full"
                                                />

                                                <div>
                                                      <p className = "text-20-medium">{post.founder.name}</p>

                                                      <p className="text-16-medium !text-black-300">@{post.founder.username}</p>
                                                </div>
                                          </Link>
                                    )}

                                    <p className = "category-tag text-white">
                                          {post.category}
                                    </p>
                              </div>

                              {/* Pitch Details */}
                              <h3 className="text-30-bold">Pitch Details</h3>
                              {
                                    parsedContent ? (
                                          <article
                                                className = "prose max-w-4xl font-work-sans break-all"
                                                dangerouslySetInnerHTML={{ __html: parsedContent }}
                                          >

                                          </article>
                                    ) : (
                                          <p className = "no-result">
                                                No details provided!
                                          </p>
                                    )
                              }

                        </div>

                        <hr className = "divider"/>

                        {/* TODO: Editors Choice of Startups */}

                        <Suspense fallback = {<Skeleton className = "view_skeleton"/>}>
                              <View id = {id}/>
                        </Suspense>

                  </section>
                  
            </>
      )

}

export default page