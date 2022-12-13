import { Badge, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const PopoverBadge = ({title, description}) => {
    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Popover width={300} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
                <Badge onMouseEnter={open} onMouseLeave={close} className="cursor-help mt-1 bg-slate-300 dark:bg-off-dark" ml={10} size="xs">{title}</Badge>
            </Popover.Target>
            <Popover.Dropdown className="dark:bg-[#1F2129] border-0" sx={{pointerEvents: 'none'}}>
                    <Text className="dark:text-[#9195AB]" size="sm">{description}</Text>
            </Popover.Dropdown>
        </Popover>
    );
}

export default PopoverBadge;