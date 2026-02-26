import Icon from "../../Icon";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const benefits = [
    "Unlimited drug interaction checks [maybe, check and put limit]",
    "AI-powered non-medical alternative suggestions",
    "Access to[relevant number of drugs available] drug profiles",
  ];

  return (
    <div className="lg:py-32 py-14 bg-green-50 grow flex md:px-8 px-4 flex-col items-center lg:flex-row gap-5 justify-center">
      <div className="flex flex-col justify-center lg:max-w-xl w-full">
        <div className="flex size-12 items-center justify-center rounded-md bg-gray-200 mb-2">
          <Icon name="ShieldCheck" className="size-6 text-green-800" />
        </div>
        <h1 className="font-mono text-2xl font-bold tracking-tight text-black sm:text-3xl text-balance">
          Start Your Journey to Safer Medicating
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Create your free InterMedica account and get instant access to the
          most comprehensive drug interaction checker with AI-powered insights.
        </p>
        <ul className="mt-8 space-y-3">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2.5 text-sm">
              <Icon name="CheckCircle2" className="size-5 text-green-600" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <RegisterForm />
    </div>
  );
}
