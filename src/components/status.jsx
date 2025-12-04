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
                    onClick={() => handleClick(section.name)}
                >
                    {section.name}
                </li>
            ))}
        </ul>
    );
}
