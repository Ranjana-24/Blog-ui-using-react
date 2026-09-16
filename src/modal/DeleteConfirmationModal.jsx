import { ImCancelCircle } from "react-icons/im";
import Button from "../ui/Button";
export default function DeleteConfirmationModal({
  confirmDlt,
  setConfirmDlt,
  handleDelete,
}) {
  return (
    <>
      {confirmDlt ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="relative w-[90%] max-w-md rounded-2xl bg-white p-8 shadow-xl">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-black">
                Delete Blog
              </h2>

              <ImCancelCircle
                className="cursor-pointer text-xl"
                onClick={() => setConfirmDlt(false)}
              />
            </div>
            <p className="mt-5 text-gray-700 hadow-yellow-500 text-sm">
              Are you sure you want to delete this blog?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <Button
                onClick={() => setConfirmDlt(false)}
                variant="success"
              >
                Cancel
              </Button>

              <Button
                onClick={() => {
                  handleDelete();
                  setConfirmDlt(false);
                }}
               variant="danger"
              >
                Delete
              </Button>

            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}