import ShadeIconBtn from "../../ui/ShadeIconBtn";

function ManageFooter() {
  return (
    <footer className="px-6 py-8 bg-base-dark-2 shadow-lg">
      <div className="flex gap-6">
        <ShadeIconBtn label="Discard Changes" type="secondary" />
        <ShadeIconBtn label="Save Changes" type="primary" />
      </div>
    </footer>
  );
}

export default ManageFooter;
