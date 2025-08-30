import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>
        <div>
          <div className="">
            <Image src="/logo.svg" alt="Nike" width={20} height={20} className="bg-black"/>
          </div>
        </div>
        <div className="">
          <h2 className=""></h2>
          <p className=""></p>
          <div className="">
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </div>
        <p className=""></p>
      </section>
      <section>
        <div className="">{children}</div>
      </section>
    </main>
  );
}
