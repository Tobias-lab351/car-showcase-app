import Link from "next/link";
import Image from "next/image";

// import CustomButton from "./CustomButton";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 ">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="car hub logo"
            className="object-contain"
          />
        </Link>
        {/* <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        /> */}
        <header className="flex justify-end items-center p-4 gap-4 h-16">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </nav>
    </header>
  );
};

export default NavBar;
