import React from 'react'

export const Timer = () => {
    return (
        <div className='container mx-auto max-w-md flex flex-col gap-6'>
            <h2 className='text-center text-8xl'>10:00</h2>
            <div className='flex gap-2'>
                <button className='w-full py-4 px-6 rounded-xl bg-slate-600 text-slate-50 text-xl'>Start</button>
                <button className='w-full py-4 px-6 rounded-xl bg-slate-600 text-slate-50 text-xl'>Stop</button>
                <button className='w-full py-4 px-6 rounded-xl bg-slate-600 text-slate-50 text-xl'>Reset</button>
            </div>
        </div>
    )
}
