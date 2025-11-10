import { AlertCircle } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
        <AlertCircle className="h-4 w-4 flex-shrink-0" />
        <p className="font-medium">
          <span className="font-bold">SECURITY NOTICE:</span> We are targeted by malicious impersonators. Only interact with our official domain and verify credentials.
        </p>
      </div>
    </div>
  );
};
