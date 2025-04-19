import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Alert = ({ message }) => {

    return (
        <div className="absolute right-10 rounded-md bg-green-50 p-4">
            <div className="flex">
                <div className="shrink-0">
                    <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Alert