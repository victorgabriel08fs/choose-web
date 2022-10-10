import Vote from "../Vote";


const Votes = ({ votes }) => {
    return (
        <div className="overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            ID
                        </th>
                        <th scope="col" className="py-3 px-6">
                            User
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Choose
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {votes.map((vote) => (
                        <Vote vote={vote} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Votes;