import { Switch } from "@headlessui/react";
import { splitUnderscore } from "utils";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Toggle: React.FC<{
  name: string,
  value: boolean,
  onChange: (...event: any[]) => void
}> = ({
  name,
  value = false,
  onChange
}) => {
    return (
      <Switch.Group as="div" className="flex items-center justify-between">
        <span className="flex-grow flex flex-col">
          <Switch.Label
            as="span"
            className="toggle-label first-letter:capitalize"
            passive
            aria-label={name}
          >
            {splitUnderscore(name)}:
          </Switch.Label>
        </span>
        <Switch
          checked={value}
          onChange={onChange}
          className={classNames(
            value ? "bg-cyan-500" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-5 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              value ? "translate-x-7" : "translate-x-0",
              "pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
      </Switch.Group>
    );
  }

export default Toggle;