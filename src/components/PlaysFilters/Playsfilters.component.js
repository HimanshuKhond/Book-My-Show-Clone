import { Disclosure } from '@headlessui/react'
import {BiChevronUp, BiChevronDown} from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
    <Disclosure className="bg-gray-500 px-2 py-4 border-2">
        {({ open }) => ( 
            <>
            <Disclosure.Button className="py-2 flex items-center gap-3 ">
                {open ? <BiChevronUp /> : <BiChevronDown />}
                <span className={open ? "text-red-600" : "text-gray-700"}>
                    {props.title}
                </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <div className="flex items-center gap-3 flex-wrap">
                    {props.tags.map((tag) => (
                        <>
                        <div className="border-2 border-gray-200 p-1">
                            <span className="text-red-600">{tag}</span>
                        </div>
                        </>
                    ))
                    }
                </div>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
  )
};

export default PlaysFilter;