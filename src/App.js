import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm />;
    return (
        <ChatEngine
            height="100vh"
            projectID="86ba96ed-9556-47c9-aad6-39f2d4e6a2c4"
            // userName="ProHan"
            // userSecret="123123"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;
