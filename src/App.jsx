import './App.css';
import BookingForm from './BookingForm.jsx';
import { useEffect } from 'react';
import pic2 from './assets/pic2.jpg';

function App() {
  useEffect(() => {
    document.title = 'Esper Audio | Music Production Lessons by Ksenia';
  }, []);
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3E3E3E] antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D6724E] flex items-center justify-center text-white font-semibold">
              EA
            </div>
            <div>
              <h1 className="text-lg font-semibold">Esper Audio</h1>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#D6724E]">
            <a
              href="https://www.instagram.com/mrs.esper/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c25f3b] transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ksenia.vasilyeva.3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c25f3b] transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 3h4a1 1 0 0 1 1 1v3h-3c-.6 0-1 .4-1 1v3h4l-1 4h-3v8h-4v-8H8v-4h3V8a5 5 0 0 1 5-5z" />
              </svg>
            </a>

            <a
              href="mailto:hello.esper@gmail.com"
              className="hover:text-[#c25f3b] transition"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8.5l-8 7L4 8.5V18z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8">
              Learn Music Production Your Way
            </h2>

            <div className="bg-white p-6 shadow-sm border border-transparent">
              <p className="mb-4">
                Hi, I’m <strong>Ksenia</strong>, founder of{' '}
                <strong>Esper Audio</strong>. I’m a bass player, sound designer,
                and educator with years of experience performing, composing, and
                teaching. I’m passionate about helping people who{' '}
                <em>think they can’t make music</em> — or who feel overwhelmed
                by technology — discover how simple and inspiring it can be.
              </p>
              <p className="mb-8">
                Every lesson is{' '}
                <strong>tailored to your goals and experience</strong>. I
                provide a <strong>patient, encouraging environment</strong> — I
                was where you are once. We’ll use{' '}
                <strong>your own ideas</strong> and build from there, with{' '}
                <strong>handouts and other supporting materials</strong> to help
                you practice. I teach <strong>Ableton Live</strong> and{' '}
                <strong>Logic Pro</strong>, but can also help with any other
                music software.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href="#book"
                  className="inline-block bg-[#D6724E] hover:bg-[#c25f3b] text-white px-5 py-3 text-sm font-medium text-center"
                >
                  Book a Free 15-min Intro
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md overflow-hidden shadow-lg bg-white">
              <img
                src={pic2}
                alt="Portrait of Ksenia"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="py-8">
          <h3 className="text-2xl font-semibold mb-4">What You’ll Learn</h3>
          <p className="mb-6">
            Lessons are fully personalized — we focus on what <em>you</em> want
            to make and learn. Here are some topics we might explore:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 shadow-sm border">
              <h4 className="font-semibold mb-2">Core Skills</h4>
              <ul className="text-sm space-y-2 text-[#555]">
                <li>• Getting comfortable with Ableton Live or Logic Pro</li>
                <li>• Recording & editing audio and MIDI</li>
                <li>• Creating beats and arranging songs</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-sm border">
              <h4 className="font-semibold mb-2">Creative Tools</h4>
              <ul className="text-sm space-y-2 text-[#555]">
                <li>• Using loops, effects, and virtual instruments</li>
                <li>• Mixing basics — EQ, compression, reverb, etc.</li>
                <li>• Turning ideas into complete tracks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-8">
          <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
          <ol className="list-decimal pl-6 space-y-3 text-sm text-[#444]">
            <li>
              <strong>Schedule a free intro chat</strong> — we’ll discuss your
              goals and experience.
            </li>
            <li>
              <strong>Choose your lesson format</strong> — online or in-person
              (NYC area).
            </li>
            <li>
              <strong>Start creating</strong> — I’ll build a personalized plan
              and adjust as you grow.
            </li>
          </ol>

          <p className="mt-4 text-sm">
            Each lesson is <strong>60 minutes</strong>, flexible, and designed
            around your schedule.
          </p>
        </section>
        <section id="book" className="min-h-screen py-20 px-6">
          <BookingForm />
        </section>
      </main>

      <footer className="mt-12 py-8 border-t border-gray-200 text-center md:text-left">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#555]">
            © {new Date().getFullYear()} Esper Audio · Founded by{' '}
            <strong>Ksenia Vasileva</strong>
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
