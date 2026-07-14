import Header from "../components/Header";
import InteractionForm from "../components/InteractionForm";
import ChatPanel from "../components/ChatPanel";

function Home() {
  return (
    <>
      <Header />
<main 
    className="container">
    <InteractionForm />
    <ChatPanel />
</main>
    </>
  );
}

export default Home;