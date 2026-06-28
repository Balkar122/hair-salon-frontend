const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal