import useText from "../hooks/text";

export default function Text(id) {
    const { isLoading, text, error } = useText(id);
    if (error) {
        console.error(error);
    }
    return (
        <div>
            {isLoading? <p>loading...</p> : <p>{text}</p>}
        </div>
    );
}
