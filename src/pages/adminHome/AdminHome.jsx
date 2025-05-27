
export default function AdminHome() {

    return <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='text-primary text-xl my-4 w-auto'>Logo</div>
        <div className="card w-85 bg-base-100 shadow-xl p-6">
            <h1 className="text-center text-3xl font-bold">Welcome to the Admin Home Page</h1>
            <p className="mt-4 text-center">This is a protected route. Only authorized users can see this page.</p>
        </div>
    </div>
}
