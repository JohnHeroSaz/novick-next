'use client'

const Error = ({
    error,
}: {
    error: Error & { digest?: string }
}) => {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <h1>{error.message}</h1>
        </div>
    )
};

export default Error;