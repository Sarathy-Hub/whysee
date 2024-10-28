import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const StartupCard = ({ post }: {post: StartupCardType}) => {

      const { _createdAt, views, founder, _id, description, image, category, title } = post

      return (
            <li className = "startup-card group">
                  <div className = "flex-between">
                        <p className = "startup_card_date">
                              {formatDate(_createdAt)}
                        </p>

                        <div className="flex gap-1.5 group-hover:text-secondary">
                              <EyeIcon className = "size-6 text-primary group-hover:text-secondary" />
                              <span className = "text-16-medium group-hover:text-secondary">{views}</span>
                        </div>
                  </div>

                  <div className="flex-between mt-5 gap-5 group-hover:text-white">
                        <div className="flex-1 group-hover:text-white">
                              <Link href = {`/user/${post.founder?._id}`}>
                                    <p className = "text-16-medium line-clamp-1 group-hover:text-white">
                                          {founder?.name}
                                    </p>
                              </Link>

                              <Link href = {`/startup/${_id}`}>
                                    <h3 className = "text-26-semibold line-clamp-1 group-hover:text-white">
                                          {title}
                                    </h3>
                              </Link>
                        </div>

                        <Link href = {`/user/${founder._id}`}>
                              <Image 
                                    src = "https://placehold.co/600x400" 
                                    alt = "Founder Icon"
                                    width = {48}
                                    height = {48}
                                    className = "rounded-full"
                              />
                        </Link>
                  </div>

                  <Link href = {`/startup/${_id}`}>
                        <p className="startup-card_desc group-hover:text-white">
                              {description}
                        </p>

                        <img src={image} alt="Startup Image" className = "startup-card_img"/>
                  </Link>

                  <div className="flex-between gap-3 mt-5 group-hover:text-white">
                        <Link href = {`/query=${category.toLowerCase()}`}>
                              <p className="text-16-medium group-hover:text-white">{category}</p>
                        </Link>

                        <Button className = "startup-card_btn group-hover:text-white" asChild>
                              <Link href = {`/startup/${_id}`}>
                                    Details
                              </Link>
                        </Button>
                  </div>

            </li>
      )
}

export default StartupCard