import React from 'react';

const Timer = () => {
  return (
    <>
    <ButtonGroup className="flex flex-wrap gap-4 items-center justify-center">
    <Button radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Start Timer</Button>
    <Button color ="white" radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Stop Timer</Button>
    <Button radius="full" variant="shadow" className="bg-gradient-to-tr from-purple-700 to-orange-100 text-white shadow-lg px-10 py-3 mt-5 cursor-pointer text-m font-bold">Clear Timer</Button>
    </ButtonGroup>
    <div className ="timer text-xl font-bold py-3">00:00</div>

    </>
  );
}

export default Timer;
