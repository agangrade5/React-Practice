import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import List from './pages/users/List'
import AddEdit from './pages/users/AddEdit'
import MainLayout from './layout/MainLayout'

import { useRef } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

function App() {
    const toast = useRef(null);

    return (
        <Router>
            <Toast ref={toast} />
            <ConfirmDialog />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<List toast={toast} />} />
                    <Route path="/add" element={<AddEdit toast={toast} />} />
                    <Route path="/edit/:id" element={<AddEdit toast={toast} />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
