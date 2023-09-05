'use client';
import { useRouter }  from "next/navigation";

export default function PrimaryButton(props) {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.push(props.href)}
            // className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 
            // focus:outline-none focus:ring-primary-300 
            // font-medium rounded-lg text-sm px-5 py-2.5 
            // text-center dark:bg-primary-600 dark:hover:bg-primary-700 
            // dark:focus:ring-primary-800"
            className="Button w-[343px] h-11 rounded-lg justify-start items-start inline-flex ButtonBase grow shrink basis-0 h-11 px-[18px] py-2.5 bg-sky-600 rounded-lg shadow border border-sky-600 justify-center items-center gap-2 flex Text text-white text-base font-semibold leading-normal"
        >
            {props.text}
        </button>

        
    )
}
