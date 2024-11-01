import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

import { StartupCardType } from "../components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home( {searchParams}: {
  searchParams: Promise<{ query?: string}>
} ) 

{

  const query = (await searchParams).query
  const params = { search: query || null }

  const session = await auth()

  console.log (session?.id)

  const { data: posts } = await sanityFetch( { query: STARTUPS_QUERY, params} )

  return (
    <>
      <section className = "pink_container">

        <h1 className = "heading">
          Pitch your Startup, <br />
          Connect with the World
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your <span className="border-2 border-[#143447] bg-[#143447] text-white p-1 rounded">IDEAS</span>, 
          Vote on <span className="border-2 border-[#143447] bg-[#143447] text-white p-1 rounded">PITCHES</span> and 
          Thrive in the <span className="border-2 border-[#143447] bg-[#143447] text-white p-1 rounded">STARTUP WORLD</span>
        </p>

        <SearchForm query = {query}/>

      </section>

      <section className = "section_container">
        <p className = "text-30-semibold">
          { query ? `Search reslts for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key = {post?._id} post = {post}/>
            ))
          ) : (
            <p className="no-results">No Startups found.</p>
          )}
        </ul>

      </section>

      <SanityLive />
    </>
  )
}
