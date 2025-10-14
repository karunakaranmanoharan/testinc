import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10 mt-24">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="font-semibold">Donyati</div>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-black dark:hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-black dark:hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} Donyati. All rights reserved.</div>
      </Container>
    </footer>
  );
}
