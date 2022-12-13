import { useDisclosure } from "@mantine/hooks";
import { Popover, Text } from "@mantine/core";

import React from "react";

const PopoverButton = ({ onClick, icon, description }) => {
    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
                <div onClick={onClick} onMouseEnter={open} onMouseLeave={close} className="cursor-pointer">{icon}</div>
            </Popover.Target>
            <Popover.Dropdown className="dark:bg-[#1F2129] border-0" sx={{pointerEvents: 'none'}}>
                    <Text className="dark:text-[#9195AB]" size="sm">{description}</Text>
            </Popover.Dropdown>
        </Popover>
    );
}

export default PopoverButton;