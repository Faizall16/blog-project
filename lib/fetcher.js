import useSWR from 'swr';

const baseURL = "https://synapsis-project-q37n.vercel.app/";
const response = (...args) => fetch(...args).then(res => res.json())

export default function Fetcher(endpoint) {
    const {data, error} = useSWR(`${baseURL}${endpoint}`, response)

    return{
        data,
        isLoading: !error && !data,
        isError: error
    }
}