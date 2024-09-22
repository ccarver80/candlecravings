"use client";

export default function Modal({ buttonName, children }) {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        {buttonName}
      </button>
      <dialog id="my_modal_1" className="modal p-4 w-full max-w-2xl max-h-full">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>
        </form>
        {children}
      </dialog>
    </>
  );
}
