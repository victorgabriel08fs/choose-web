const Vote = ({ vote }) => {

    return (
        <tr key={vote.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="py-4 px-6" scope="row" >
                {vote.id}
            </td>
            <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {vote.user ? vote.user.name : ''}
            </td>
            <td className="py-4 px-6">
                {vote.choose}
            </td>
            <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    );
}

export default Vote;