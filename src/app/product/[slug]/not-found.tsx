import Button from "@/components/ui/Button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

function ProductNotFound() {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="my-16 flex w-full max-w-sm flex-col items-center gap-4 rounded-md border py-8">
        <ExclamationTriangleIcon className="h-16 w-16 text-primary" />
        <h1 className="text-center text-3xl font-bold text-primary">
          Page Not Found
        </h1>
        <p>This page could not be found</p>
        <Button className="mt-8" comp="link" href="/shop">
          Go back
        </Button>
      </div>
    </div>
  );
}

export default ProductNotFound;
