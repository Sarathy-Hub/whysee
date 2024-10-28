import React from "react"

import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"

const Navbar = async () => {

      const session = await auth()

      return (
            <header className = "px-6 py-4 bg-primary shadow-sm font-work-sans text-sm">
                  <nav className = "flex justify-between items-center text-white font-semibold">
                        <Link href = "/">
                              <Image src = "/whyseelogo-final.png" alt = "Logo" width = {60} height = {40} className = "rounded-md" />
                        </Link>

                        <div className="flex items-center gap-5">

                              { session && session?.user ? (
                                    <>
                                          <Link href = "/startup/create">
                                                <span>Create</span>
                                          </Link>

                                          <form action = {async () => {
                                                "use server"

                                                await signOut()
                                          }}>
                                                <button type = "submit">
                                                      Logout
                                                </button>
                                          </form>

                                          <Link href = {`/user/${session?.id}`}>
                                                <span>{session?.user?.name}</span>
                                          </Link>
                                    </>
                              ) : (
                                    <form action = {async () => {
                                          "use server"

                                          await signIn('github')
                                    }}>
                                          <button type = "submit">
                                                Login
                                          </button>
                                    </form>
                              )}

                        </div>

                  </nav>
            </header>
      )

}

export default Navbar