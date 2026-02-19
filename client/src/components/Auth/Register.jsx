import { CheckCircle2 } from "lucide-react";

export default function Register() {
  return (
    <div className="h-full py-32 bg-green-50 flex px-8 flex-row gap-5 justify-center">
      <div className="flex flex-col justify-center max-w-4xl w-full">
        <h1 className="font-mono text-2xl font-bold tracking-tight text-black sm:text-3xl text-balance">
          Start Your Journey to Safer Prescribing
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Create your free InterMedica account and get instant access to the
          most comprehensive drug interaction checker with AI-powered insights.
        </p>
        <ul className="mt-8 space-y-3">
          <li className="flex items-center gap-2.5 text-sm">
            <CheckCircle2 className="size-4 shrink-0 text-green-600" />
            Unlimited drug interaction checks [maybe, check and put limit]
          </li>
          <li className="flex items-center gap-2.5 text-sm">
            <CheckCircle2 className="size-4 shrink-0 text-green-600" />
            AI-powered non-medical alternative suggestions
          </li>
          <li className="flex items-center gap-2.5 text-sm">
            <CheckCircle2 className="size-4 shrink-0 text-green-600" />
            Access to [relevant number of drugs available] drug profiles
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full items-center justify-center border border-green-200 shadow-md py-6 bg-white rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-mono">Create Your Account</h2>
          <p className="text-gray-500">
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
