import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Counter from './components/hooks/useState/Counter'
import InputExample from './components/hooks/useState/InputExample'
import MultiInputExample from './components/hooks/useState/MultiInputExample'
import AdvancedInputExample from './components/hooks/useState/AdvancedInputExample'
import UncontrolledForm from './components/hooks/useRef/UncontrolledForm'
import BasicValidationForm from './components/hooks/useState/BasicValidationForm'
import TodoApp from './components/hooks/useState/TodoApp'
import First from './components/hooks/useEffect/First'
import Timer from './components/hooks/useEffect/Timer'
import WindowSizeTracker from './components/hooks/useEffect/WindowSizeTracker'
import Users from './components/hooks/useEffect/Users'
import FirstRoute from './router/FirstRoute'
import ExpenseTracker from './components/expense-tracker/ExpenseTracker'
import Tracker from './components/expense-tracker-practice/Tracker'

function App() {
    const fruits = ["Apple", "Orange", "Kiwi", "Banana", "Watermelon", "Papaya"];
    return (
        <>
            {/* <Hello firstName="Jhon" lastName="smith" age="20" emailAddress="test@gmail.com" fruits={fruits} />
             */}

            {/* useEffect hooks */}
            {/* <Counter />
            <InputExample />
            <MultiInputExample />
            <AdvancedInputExample />
            <BasicValidationForm />
            <TodoApp /> */}

            {/* useRef hooks */}
            {/* <UncontrolledForm /> */}

            {/* useEffect hooks */}
            {/* <First />
            <Timer />
            <WindowSizeTracker />
            <Users /> */}

            {/* routers */}
            {/* <FirstRoute /> */}

            {/* expense tracker project */}
            {/* <ExpenseTracker /> */}
            <Tracker />
        </>
    )
}

export default App
