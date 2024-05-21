import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Wrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Reina.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/pricing"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Ücretlerimiz
            </Link>

            <LoginLink
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Giriş Yap
            </LoginLink>

            <RegisterLink
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Kayıt Ol
            </RegisterLink>

            <RegisterLink className={buttonVariants({ size: "sm" })}>
              Keşfet <ArrowRight className="ml-1.5 h-5 w-5" />
            </RegisterLink>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
