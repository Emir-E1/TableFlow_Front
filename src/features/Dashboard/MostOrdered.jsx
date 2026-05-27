import { ChevronDown } from "lucide-react";
import plateImg from "../../assets/soup.png";
import SelectInput from "../../ui/SelectInput";
import { Avatar, AvatarImage } from "../../components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

const ITEMS = [
  { name: "Spicy seasoned seafood noodles", ordered: 200 },
  { name: "Salted pasta with mushroom sauce", ordered: 120 },
  { name: "Beef dumpling in hot and sour soup", ordered: 80 },
  { name: "Beef dumpling in hot and sour soup", ordered: 80 },
];

function MostOrdered() {
  return (
    <Card className="w-full bg-base-dark-2 border-base-dark-line">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white text-lg">Most Ordered</CardTitle>

        <SelectInput
          options={["Today", "Last Week", "Last Month"]}
          icon={<ChevronDown size={20} className="text-white" />}
        />
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col divide-y divide-base-dark-line">
          {ITEMS.map(({ name, ordered }) => (
            <li key={name} className="flex items-center gap-4 py-2">
              <Avatar>
                <AvatarImage src={plateImg} />
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-white">{name}</p>
                <p className="mt-0.5 text-sm text-text-light">
                  {ordered} dishes ordered
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-center">
        <ShadeIconBtn label="View All" type={"secondary"} size={"full"} />
      </CardFooter>
    </Card>
  );
}

export default MostOrdered;
