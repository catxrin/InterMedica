import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border border-green-200 shadow-sm bg-green-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center lg:flex-row lg:text-left">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary">
            <Icon name="ShieldCheck" className="size-4 text-white" />
          </div>
          <span className="font-sans font-bold text-sm">InterMedica</span>
        </div>
        <p className="text-xs flex justify-center text-gray-600 w-full">
          This tool is for informational purposes only and does not constitute
          medical advice. Always consult a qualified healthcare provider.
        </p>
      </div>
    </footer>
  );
}
