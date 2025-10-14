"use client";
import Section from "../components/Section";
import Container from "../components/Container";
import { Button, LinkButton } from "../components/Button";
import { FadeIn, StaggerChildren } from "../components/AnimateInView";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(14,165,233,0.08),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(99,102,241,0.09),transparent)] pointer-events-none" />
        <Container className="pt-24 pb-20 md:pt-32 md:pb-28">
          <FadeIn>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Data-driven transformation for modern enterprises.</h1>
              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl">
                We help organizations modernize with cloud, analytics, and digital solutions that create measurable business value.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <LinkButton href="#contact" size="lg">Talk to an expert</LinkButton>
                <LinkButton href="#services" size="lg" variant="secondary">Explore services</LinkButton>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Logos */}
      <Section className="bg-muted/60">
        <StaggerChildren className="flex items-center justify-center gap-10 flex-wrap opacity-80">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 w-28 bg-zinc-200 dark:bg-zinc-800 rounded" />
          ))}
        </StaggerChildren>
      </Section>

      {/* Services */}
      <Section id="services">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What we do</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">End-to-end consulting from strategy to execution.</p>
          </div>
        </FadeIn>
        <StaggerChildren className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Data & Analytics", desc: "Modern data platforms, BI, AI/ML." },
            { title: "Cloud Transformation", desc: "Migrate, optimize, and govern at scale." },
            { title: "Digital Experiences", desc: "Customer and employee apps that delight." },
          ].map((card) => (
            <div key={card.title} className="rounded-2xl border border-border/70 p-6 bg-white dark:bg-zinc-950">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">{card.desc}</p>
              <Button className="mt-4" variant="ghost">Learn more</Button>
            </div>
          ))}
        </StaggerChildren>
      </Section>

      {/* Insights */}
      <Section id="insights" className="bg-muted/60">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Insights</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">Perspectives on technology, data, and transformation.</p>
          </div>
        </FadeIn>
        <StaggerChildren className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="rounded-2xl border border-border/70 p-6 bg-white dark:bg-zinc-950">
              <div className="h-40 rounded-lg bg-zinc-100 dark:bg-zinc-900" />
              <h3 className="mt-4 text-lg font-semibold">Article headline {i + 1}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Short description of a thought leadership piece.</p>
              <Button className="mt-4" variant="ghost">Read more</Button>
            </article>
          ))}
        </StaggerChildren>
      </Section>

      {/* About */}
      <Section id="about">
        <StaggerChildren>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About Donyati</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">
              We are advisors and builders with deep enterprise experience across industries, helping clients evolve with data and digital.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "+150 projects", desc: "Delivered across data, cloud, and digital" },
              { title: "Global team", desc: "Experts across strategy, engineering, and design" },
              { title: "Outcome-driven", desc: "Partnered to deliver measurable value" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/70 p-6 bg-white dark:bg-zinc-950">
                <div className="text-2xl font-semibold">{item.title}</div>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </StaggerChildren>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-muted/60">
        <FadeIn>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s talk</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300">Share your goals and we’ll show how we can help.</p>
            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Name" className="h-12 rounded-lg border border-border/70 bg-white dark:bg-zinc-950 px-4" />
              <input placeholder="Company" className="h-12 rounded-lg border border-border/70 bg-white dark:bg-zinc-950 px-4" />
              <input placeholder="Email" className="h-12 rounded-lg border border-border/70 bg-white dark:bg-zinc-950 px-4 md:col-span-2" />
              <textarea placeholder="How can we help?" className="min-h-32 rounded-lg border border-border/70 bg-white dark:bg-zinc-950 px-4 py-3 md:col-span-2" />
              <div className="md:col-span-2">
                <Button size="lg">Send</Button>
              </div>
            </form>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
