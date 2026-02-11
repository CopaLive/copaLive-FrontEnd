import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type BackButtonProps = {
  url: string;
};

export default function BackButton(props: BackButtonProps) {
  return (
      <Link
        to={props.url}
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 group"
      >
        <Button variant="ghost">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Retour aux matchs
        </Button>
      </Link>
  );
}
