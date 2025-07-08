import { Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

export function ImageModal({ label, src }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-indigo-400 underline underline-offset-2 hover:text-indigo-200 transition-all cursor-pointer"
      >
        {label}
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} as={Fragment}>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          <Dialog.Panel
            className="relative p-4 max-w-[70vw] max-h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={label}
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border border-white/10"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/70 hover:bg-black/90 px-3 py-1 rounded-full text-xl"
              aria-label="Close image"
            >
              &times;
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
