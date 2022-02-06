import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {

    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    return (
        <div className="chat-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    React Chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId =""
                userName=""
                userSecret=""
            />
        </div>
    );
}

export default Chats;