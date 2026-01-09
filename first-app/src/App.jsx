import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//react first component
import Hello from './Hello'
//useState hook
import Counter from './components/hooks/useState/Counter'
import InputExample from './components/hooks/useState/InputExample'
import MultiInputExample from './components/hooks/useState/MultiInputExample'
import AdvancedInputExample from './components/hooks/useState/AdvancedInputExample'
import UncontrolledForm from './components/hooks/useRef/UncontrolledForm'
import BasicValidationForm from './components/hooks/useState/BasicValidationForm'
import TodoApp from './components/hooks/useState/TodoApp'
//useEffect hook
import First from './components/hooks/useEffect/First'
import Timer from './components/hooks/useEffect/Timer'
import WindowSizeTracker from './components/hooks/useEffect/WindowSizeTracker'
import Users from './components/hooks/useEffect/Users'
//useEffectEvent hook
import TimerEvent from './components/hooks/useEffectEvent/TimerEvent'
import AutoSaveForm from './components/hooks/useEffectEvent/AutoSaveForm'
//useContext
import PropsDrillingContext from './components/hooks/useContext/PropsDrillingContext'
import PropsDrillingContextMultipleValue from './components/hooks/useContext/PropsDrillingContextMultipleValue'
import ThemeColor from './components/hooks/useContext/ThemeColor'
import Navbar from './components/hooks/useContext/auth-example/Navbar'
import { AuthProvider } from './components/hooks/useContext/auth-example/AuthContext'
//useReducer hook
import CheckboxToggle from './components/hooks/useReducer/CheckboxToggle'
import CountReducer from './components/hooks/useReducer/CountReducer'
import FormReducer from './components/hooks/useReducer/FormReducer'
//useMemo hook
import WithoutUseMemo from './components/hooks/useMemo/WithoutUseMemo'
import WithUseMemoFirst from './components/hooks/useMemo/WithUseMemoFirst'
import WithUseMemoSecond from './components/hooks/useMemo/WithUseMemoSecond'
import Parent from './components/hooks/useMemo/Parent'
//useCallback hook
import CounterCallback from './components/hooks/useCallback/CounterCallback'
import ParentCallback from './components/hooks/useCallback/ParentCallback'
//router
import FirstRoute from './router/FirstRoute'
//expense-tracker practical
import ExpenseTracker from './components/expense-tracker/ExpenseTracker'
import Tracker from './components/expense-tracker-practice/Tracker'
//props-drilling, state-lifting and shared-states
import PropsDrilling from './components/props-drilling/PropsDrilling'
import StateLifting from './components/state-lifting/StateLifting'
import SharedStates from './components/shared-states/SharedStates'


function App() {
    const fruits = ["Apple", "Orange", "Kiwi", "Banana", "Watermelon", "Papaya"];
    return (
        <>
            {/* <Hello firstName="Jhon" lastName="smith" age="20" emailAddress="test@gmail.com" fruits={fruits} />
             */}

            {/* useState hooks */}
            {/* <Counter /> */}
            {/* <InputExample /> */}
            {/* <MultiInputExample /> */}
            {/* <AdvancedInputExample /> */}
            {/* <BasicValidationForm /> */}
            {/* <TodoApp /> */}

            {/* useRef hooks */}
            {/* <UncontrolledForm /> */}

            {/* useEffect hooks */}
            {/* <First /> */}
            {/* <Timer /> */}
            {/* <WindowSizeTracker /> */}
            {/* <Users /> */}

            {/* useEffectEvent hooks */}
            {/* <TimerEvent /> */}
            {/* <AutoSaveForm /> */}

            {/* useContext hooks */}
            {/* <PropsDrillingContext /> */}
            {/* <PropsDrillingContextMultipleValue /> */}
            {/* <ThemeColor /> */}
            {/* <AuthProvider>
                <Navbar />
            </AuthProvider> */}

            {/* useReducer hooks */}
            {/* <CheckboxToggle /> */}
            {/* <CountReducer /> */}
            {/* <FormReducer /> */}

            {/* useMemo hooks */}
            {/* <WithoutUseMemo /> */}
            {/* <WithUseMemoFirst /> */}
            {/* <WithUseMemoSecond /> */}
            {/* <Parent /> */}

            {/* useCallback hooks */}
            {/* <CounterCallback /> */}
            <ParentCallback />

            {/* routers */}
            {/* <FirstRoute /> */}

            {/* expense tracker project */}
            {/* <ExpenseTracker /> */}
            {/* <Tracker /> */}

            {/* Props Drilling example */}
            {/* <PropsDrilling /> */}

            {/* State Lifting example */}
            {/* <StateLifting /> */}

            {/* Shared States example */}
            {/* <SharedStates /> */}
        </>
    )
}

export default App
