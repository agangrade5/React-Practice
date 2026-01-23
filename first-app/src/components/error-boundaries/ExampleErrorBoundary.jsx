import ErrorBoundary from './ErrorBoundary';
import UserProfile from './UserProfile';

const ExampleErrorBoundary = () => {
    const userData = {
        name: "John Doe",
        age: 25,
    };

    const userData1 = null;

    return (
        <div>
            {/* blank data will throw error */}
            {/* <UserProfile userData={userData} />
            <UserProfile userData={userData1} /> */}

            {/* ErrorBoundary will catch error */}
            <ErrorBoundary>
                <UserProfile userData={userData} />
            </ErrorBoundary>

            <ErrorBoundary fallback="User data is not available. Please try again later.">
                <UserProfile userData={userData1} />
            </ErrorBoundary>
        </div>
    )
}

export default ExampleErrorBoundary
