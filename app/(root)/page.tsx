import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home( {searchParams}: {
  searchParams: Promise<{ query?: string}>
} ) 

{

  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: 19,
      founder: { _id: 1, name: 'Saranya Sarathy'},
      _id: 1,
      description: 'This is a sample description of the startup',
      image: "https://static.vecteezy.com/system/resources/previews/014/393/969/non_2x/startup-success-arrow-cursor-up-right-direction-overlap-overlapping-colorful-logo-design-vector.jpg",

      category: "Robots",
      title: "We Robots"
    }
  ]

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
    </>
  )
}
