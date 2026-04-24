const WHATSAPP_URL =
  "https://wa.me/5571999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Belvedere%20Hill%20Residence%20e%20gostaria%20de%20receber%20a%20tabela%20e%20o%20book%20digital.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-105 sm:px-5 sm:py-4 sm:text-base"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5 sm:h-6 sm:w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.55-1.234.114-.215.157-.448.157-.665v-.5c0-.114-.024-.214-.07-.314-.144-.262-1.18-.788-1.624-1.06zm-2.965 7.59c-1.84 0-3.638-.563-5.144-1.582l-3.57 1.13 1.155-3.413a9.078 9.078 0 0 1-1.747-5.385c0-5.062 4.184-9.184 9.306-9.184a9.143 9.143 0 0 1 6.55 2.708 9.207 9.207 0 0 1 2.708 6.55c0 5.062-4.184 9.176-9.258 9.176zm0-20.213c-6.166 0-11.213 5.005-11.213 11.158 0 1.957.516 3.892 1.49 5.563L5 28l5.55-1.798a11.114 11.114 0 0 0 5.595 1.518h.005c6.16 0 11.343-5.005 11.343-11.158 0-2.98-1.262-5.79-3.371-7.9-2.11-2.122-4.92-3.279-7.927-3.279z" />
      </svg>
      <span className="hidden sm:inline">Fale no WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
