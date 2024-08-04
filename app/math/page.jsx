"use client"
import React from 'react';
import {useState} from 'react';
import {Button, ButtonGroup} from "@nextui-org/button";
import { Progress } from '@nextui-org/react';
import Image from 'next/image';


const Math = () => {
  return (
    <div className="wrapper text-center">
    <ButtonGroup className="flex flex-wrap gap-4 items-center justify-center">
    <Button radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Start Timer</Button>
    <Button color ="white" radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Stop Timer</Button>
    <Button radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Clear Timer</Button>
    </ButtonGroup>
    <div className ="timer text-xl font-bold py-3">00:00</div>
    <Image
      src="/Images/ai-girl.png"
      width={400}
      height={400}
      alt="3d image of black girl"
      className="ai-girl"
    />
    {/* <Progress
        aria-label ="keep going! you got this!"
        size="lg"
        value={50}
        color="purple"
        showValueLabel={true}
        classNames={{
            base:'max-w-md',
            track:"drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
            label: "tracking-wider font-medium text-default-600",
            value:"text-foreground/50"
        }}
    /> */}

    </div>
  );
}

export default Math;

