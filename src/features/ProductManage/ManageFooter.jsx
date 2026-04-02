import Button from "../../ui/Button";
function ManageFooter() {
  return (
    <footer className="px-6 py-8 bg-base-dark-2 shadow-lg">
      <div className="flex gap-6">
        <Button type="secondary">Discard Changes</Button>

        <Button>Save Changes</Button>
      </div>
    </footer>
  );
}

export default ManageFooter;
