import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/header.jsx';
import UserList from './components/UserList.jsx';

function App() {
    return (
        <>
            {/* Header component */}
            <Header />

            {/* Main component  */}
            <main className="main">
            <UserList />


                

            </main>
            <Footer />
        </>
    )
}

export default App
