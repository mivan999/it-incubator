import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.sibbelka.ru%2Fimg%2Fheader_logo.png&imgrefurl=http%3A%2F%2Fwww.sibbelka.ru%2F&tbnid=ayiJ8Hwr5rB5QM&vet=10CDQQMyh-ahcKEwjoiIrd_LD0AhUAAAAAHQAAAAAQAg..i&docid=uuh8zIeSXo8eOM&w=291&h=331&itg=1&q=header%20logo&client=opera&ved=0CDQQMyh-ahcKEwjoiIrd_LD0AhUAAAAAHQAAAAAQAg"
                    alt=""/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">Newa</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>

            </nav>
            <div className="content">
                <img src=" https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg" alt=""/>
                <div>ava+descriptions</div>
                <div>Mypost
                    <div>New post</div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>


        </div>
    );
}

export default App;
