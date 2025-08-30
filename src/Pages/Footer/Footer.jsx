import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaStethoscope, FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t bg-neutral-50/60 dark:bg-neutral-900/60">
      {/* Top CTA */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/90">
                <FaStethoscope className="h-4 w-4" /> Appointments
              </p>
              <h3 className="mt-1 text-2xl font-semibold leading-tight">
                Book your consultation with Dr. Md. Nasir Uddin Bhuiyan
              </h3>
              <p className="mt-1 text-white/90">
                MBBS, BCS (Health), PGT (Gynae), MPH (LU), Ph.D. (RH) — Reproductive Health & Public Health
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row md:w-auto">
              <a
                href="tel:+8801707077941"
                className="inline-flex items-center justify-center rounded-2xl bg-white/95 px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-white"
              >
                <FaPhoneAlt className="mr-2 h-4 w-4" /> Call: +8801707077941
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {/* Brand & brief */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow">
                <FaStethoscope className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold">Dr. Md. Nasir Uddin Bhuiyan</p>
               
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Specialist in Gynaecology & Obstetrics, Maternal & Child Health, Public Health, and Respiratory Medicine. 
              Providing compassionate, evidence-based care.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Facebook" href="https://www.facebook.com/share/1CMv2yYNC8/?mibextid=wwXIfr" className="rounded-xl p-2 ring-1 ring-neutral-200 transition hover:bg-neutral-100 dark:ring-neutral-700 dark:hover:bg-neutral-800">
                <FaFacebook className="h-4 w-4" />
              </a>
              <a aria-label="YouTube" href="#" className="rounded-xl p-2 ring-1 ring-neutral-200 transition hover:bg-neutral-100 dark:ring-neutral-700 dark:hover:bg-neutral-800">
                <FaYoutube className="h-4 w-4" />
              </a>
              <a aria-label="Instagram" href="#" className="rounded-xl p-2 ring-1 ring-neutral-200 transition hover:bg-neutral-100 dark:ring-neutral-700 dark:hover:bg-neutral-800">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-xl p-2 ring-1 ring-neutral-200 transition hover:bg-neutral-100 dark:ring-neutral-700 dark:hover:bg-neutral-800">
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-100">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-0.5 h-4 w-4 flex-none" />
                <div>
                  <a className="hover:underline" href="tel:+8801707077941">+8801707077941</a>
                  <p className="text-xs text-neutral-500">Emergency? Call local services.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-0.5 h-4 w-4 flex-none" />
                <a className="hover:underline" href="mailto:nasirbhuiya58@gmail.com">nasirbhuiya58@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 h-4 w-4 flex-none" />
                <div>
                  <p>Chamber: New Jansheba Diagnostic Center</p>
                  {/* <a href="https://maps.google.com" className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:underline">
                    View on Map <FaExternalLinkAlt className="h-3 w-3" />
                  </a> */}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

        {/* Legal row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-neutral-500 dark:text-neutral-400 md:flex-row md:items-center">
          <p>
            © {year} Dr. Md. Nasir Uddin Bhuiyan. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms & Conditions</a>
            <a href="#disclaimer" className="hover:underline">Medical Disclaimer</a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-xs leading-5 text-neutral-500 dark:text-neutral-400">
          <strong>Disclaimer:</strong> Information on this website is for educational purposes only and should not be considered medical advice. 
          For medical emergencies, call your local emergency number immediately.
        </p>
      </div>
    </footer>
  );
}