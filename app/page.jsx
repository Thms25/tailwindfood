import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-12 py-8">
      <div className="">
        <Link href='/'>Login</Link>
        <Link href='/'>Signup</Link>
      </div>

      <Header />

      <div>
        <h4 className="font-bold mt-5 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div>
          <RecipeCard src='/images/recipe-1.jpeg' />
        </div>

        <h4 className="font-bold mt-5 pb-2 border-b border-gray-200 ">Most Popular Recipes</h4>
        <div>
          <RecipeCard src='/images/recipe-2.jpeg' />
        </div>
      </div>

      <div>
        <p>Load More...</p>
      </div>
    </main>
  );
}
