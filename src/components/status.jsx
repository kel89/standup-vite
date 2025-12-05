import { useState } from "react";
import { status_sections } from "../utils/constants";

export default function Status({ handleCheckboxClick }) {
    const [sections, setSections] = useState(status_sections);

    function handleClick(section) {
        setSections(
            sections.map((s) =>
                s.name === section.name ? { ...s, done: true } : s
            )
        );
        handleCheckboxClick();
    }
    return (
        <ul className="mx-auto max-w-xs gap-x-8 gap-y-16 text-center grid-cols-1">
            {sections.map((section) => (
                <li
                    key={section.name}
                    onClick={() => handleClick(section)}
                    className={`${
                        section.done
                            ? "bg-gray-800 text-white"
                            : "hover:bg-blue-50 text-gray-900"
                    } rounded p-1.5 hover:cursor-pointer block my-1.5 pl-12 flex items-center text-2xl font-bold tracking-tight`}
                >
                    {section.name}
                </li>
            ))}
        </ul>
    );
}
