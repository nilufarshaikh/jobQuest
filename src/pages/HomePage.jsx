import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => {
  return (
    <div>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <div className="p-4 bg-base-100 text-base-content">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default HomePage;
