export default function Layout({children}) {
  return (
    <div className="container mx-auto mt-12 py-1 max-w-screen-sm">
        {children}
      <footer className="pt-8">
        <hr className="text-gray-500"/>
        <p className="text-gray-500 text-sm mt-4 mb-12">Copyright © 2021 Powered by next.js</p>
      </footer>
    </div>
  )
}