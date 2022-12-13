import React from "react";

import { Popover, Text } from "@mantine/core";

import { useDisclosure } from '@mantine/hooks';

const PopoverCard = ({money, value, title, description}) => {
    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
            <Popover.Target>
                <div className={`text-white dark:text-white shadow-lg w-48 rounded-lg flex flex-col items-center ml-5 bg-gradient-to-r from-blue-600 to-blue-400 p-8`}
                        onMouseEnter={open} onMouseLeave={close}>
                    <div className="flex flex-row items-center text-2xl font-bold">{value} {money ? <p>,00R$</p> : ""} </div>
                  <p>{title}</p>
                </div>
            </Popover.Target>
            <Popover.Dropdown className="dark:bg-[#1F2129] border-0" sx={{pointerEvents: 'none'}}>
                    <Text className="dark:text-[#9195AB]" size="sm">{description}</Text>
            </Popover.Dropdown>
        </Popover>
    );
}

export default PopoverCard;