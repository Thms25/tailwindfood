import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-12 py-8">
      <div className='flex justify-end text-primary-100'>
        <Link href='/' className="btn">Login</Link>
        <Link href='/' className='ml-2 btn'>Signup</Link>
      </div>

      <Header />

      <div>
        <h4 className="font-bold mt-5 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <RecipeCard src='/images/recipe-1.jpeg' />
          <RecipeCard src='/images/recipe-4.jpeg' />
          <RecipeCard src='/images/recipe-3.jpeg' />
          <RecipeCard src='/images/recipe-1.jpeg' />
          <RecipeCard src='/images/recipe-4.jpeg' />
          <RecipeCard src='/images/recipe-3.jpeg' />
        </div>

        <h4 className="font-bold mt-5 pb-2 border-b border-gray-200 ">Most Popular Recipes</h4>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <RecipeCard src='/images/recipe-2.jpeg' />
          <RecipeCard src='/images/recipe-5.jpeg' />
          <RecipeCard src='/images/recipe-3.jpeg' />
          <RecipeCard src='/images/recipe-2.jpeg' />
          <RecipeCard src='/images/recipe-5.jpeg' />
          <RecipeCard src='/images/recipe-3.jpeg' />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <p className="bg-secondary-100 btn">Load More...</p>
      </div>
    </main>
  );
}
