import Button from "./Button";

function Hello (props) {

    const getName = (name) => {
        return name;
    }

    const name = "Hello App";

    const handleClick = () => {
        return alert('Hello New');
    }

    const handleInput = (event) => {
        console.clear();
        console.log("input value:- " + event.target.value);
    }

    const handleMouseOver = () => console.log('Mouse over');

    const handleDoubleClick = () => console.log('double click');

    const users = {
        fname: "FTest",
        lname: "LTest",
        email: "test@gmail.com",
        fullName: function () {
            return `${this.fname} ${this.lname}`;
        }
    };

    const {firstName, lastName, age, emailAddress} = props;

    const handleFunction = () => {
        alert('Click Me....');
    }

    return (
        <>
            <h1>{getName(name)}</h1>

            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur</p>

            <button onClick={handleClick}>Click Me!</button>
            <button onClick={() => alert('Hey....')}>Hey</button>
            <button onClick={() => alert(name)}>Hello</button>
            
            <Button label='Click Me' handleFunction={handleFunction} />

            <br />
            <h2>Fruits List</h2>
            <ul>
                {
                    props.fruits.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>
                    })
                }
            </ul>

            <br />
            <p>Name: {users.fname}</p>
            <p>Email: {users.email}</p>
            <p>Full Name: {users.fullName()}</p>

            <br />
            <input type="text" onChange={handleInput} placeholder="Type here..." />

            <br />
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Age: {props.age}</p>
            <p>Email Address: {props.emailAddress}</p>

            <br />
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
            <p>Email Address: {emailAddress}</p>
        </>
    )
}

export default Hello;