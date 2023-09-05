'use client';
import { useRouter }  from "next/navigation";

export default function PrimaryButton2(props) {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.push(props.href)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {props.text}
        </button>
    )
}
