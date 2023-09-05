
export default function Widget3(props) {
    return (
        <div className="grid grid-cols-4">
            <div className="bg-blue-200 p-4 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className="bg-green-200 p-4">Item 2</div>
            <div className="bg-yellow-200 p-4">Item 3</div>
            <div className="bg-red-200 p-4">Item 4</div>
            <div className="bg-purple-200 p-4">Item 5</div>
            <div className="bg-pink-200 p-4">Item 6</div>
            <div className="bg-purple-200 p-4">Item 7</div>
            <div className="bg-pink-200 p-4">Item 8</div>
        </div>
    )
}
