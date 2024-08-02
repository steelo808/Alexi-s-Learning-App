"use client"
import React from 'react';
import {useState} from 'react';
import {Button} from "@nextui-org/button";
import { Progress } from '@nextui-org/react';


const Math = () => {
  return (
    <div className="wrapper text-center">
    <Button radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Start Timer</Button>
    <Button color ="white" radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Stop Timer</Button>
    <Button radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Clear Timer</Button>
    <div className ="timer">00</div>
    <Progress
        aria-label = "keep going! you got this!"
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
    />

    </div>
  );
}

export default Math;

