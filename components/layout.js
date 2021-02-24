export default function Layout({children}) {
  return (
    <div className="container mx-auto mt-12 py-1 max-w-2xl px-4 md:px-0">
        {children}
      <footer className="pt-8">
        <hr className="text-gray-500"/>
        <p className="text-gray-500 text-sm mt-4 mb-12">Copyright © 2021 Watson. All rights reserved.</p>
      </footer>
    </div>
  )
}