
export default function Header() {
  return (
    <div className="border-b p-4">
        <div className="flex justify-between">
          <h1 className="mt-2">Dashboard</h1> 
          <div>
            <input type="text" placeholder="Search anything..." 
              className="focus:border-blue-100 py-2 px-4 w-[400px] bg-blue-100 rounded-sm"
            />
          </div>
      </div>
    </div>
  )
}