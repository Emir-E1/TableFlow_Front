import Card from "../../ui/Card";

function MenuItem({ className, dish }) {
  return <Card className={`h-full w-full ${className}`} {...dish} />;
}

export default MenuItem;
