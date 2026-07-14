import Header from "../components/Header";
import InteractionForm from "../components/InteractionForm";
import ChatPanel from "../components/ChatPanel";

function Home() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-2 gap-6">

          <InteractionForm />

          <ChatPanel />

        </div>
      </div>
    </>
  );
}

export default Home;