
const hocWithAuth = (WrappedComponent) => {
    return (props) => {
        const isAuthenticated = false; // Replace with actual authentication logic

        if (!isAuthenticated) {
            return <h2 style={{border: '2px solid blue'}}>Please log in to access this content.</h2>;
        }

        return <WrappedComponent {...props} />
    }
}

export default hocWithAuth
