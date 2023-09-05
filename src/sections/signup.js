import Image from 'next/image'
import PrimaryButton from '@/components/PrimaryButton'

export default function signup() {

    return (
     

        <div className="Content w-[343px] h-[552px] flex-col justify-start items-center gap-8 inline-flex m-32">
            <div className="Header self-stretch h-[136px] flex-col justify-start items-center gap-6 flex">
                <div className="Logomark shadow justify-start items-start inline-flex">
                    <div className="Content w-12 h-12 relative bg-gradient-to-b from-white to-gray-300 rounded-xl border border-gray-300">
                        <div className="Grid w-12 h-12 left-0 top-0 absolute"></div>
                        <div className="Dot w-6 h-6 left-[12px] top-[12px] absolute bg-gradient-to-tr from-violet-900 to-violet-700 rounded-full shadow"></div>
                        <div className="Blur w-12 h-6 left-0 top-[24px] absolute bg-white bg-opacity-20 rounded-bl-xl rounded-br-xl backdrop-blur-[7.50px]"></div>
                    </div>
                </div>
                <div className="TextAndSupportingText self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                    <div className="Text self-stretch text-center text-gray-900 text-2xl font-semibold leading-loose">Log in to your account</div>
                    <div className="SupportingText self-stretch text-center text-gray-500 text-base font-normal leading-normal">Welcome back! Please enter your details.</div>
                </div>
            </div>
            <div className="Content self-stretch h-[332px] rounded-xl flex-col justify-start items-center gap-6 flex">
                <div className="Form self-stretch h-40 flex-col justify-start items-start gap-5 flex">
                    <div className="InputField self-stretch h-[70px] flex-col justify-start items-start flex">
                        <div className="InputFieldBase self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="InputWithLabel self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="Label text-slate-700 text-sm font-medium leading-tight">Email</div>
                                <label class="Input self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                    <input
                                        type="text"
                                        class="w-full bg-transparent border-none outline-none text-gray-500 text-base font-normal leading-normal"
                                        placeholder="Enter your email"
                                    />
                                </label>

                            </div>
                        </div>
                    </div>
                    <div className="InputField self-stretch h-[70px] flex-col justify-start items-start flex">
                        <div className="InputFieldBase self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <div className="InputWithLabel self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                                <div className="Label text-slate-700 text-sm font-medium leading-tight">Password</div>
                                <label class="Input self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                                    <input
                                        type="password"
                                        class="w-full bg-transparent border-none outline-none text-gray-500 text-base font-normal leading-normal"
                                        placeholder="••••••••"
                                    />
                                </label>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="Row self-stretch justify-between items-center inline-flex">
                    <div className="Checkbox justify-start items-center gap-2 flex">
                        <div className="Checkbox justify-center items-center flex">
                            <div className="CheckboxBase w-4 h-4 relative bg-white rounded border border-gray-300"></div>
                        </div>
                        <div className="Text text-slate-700 text-sm font-medium leading-tight">Remember for 30 days</div>
                    </div>
                    <div className="Button self-stretch justify-start items-start flex">
                        <div className="ButtonBase justify-center items-center gap-2 flex">
                            <div className="Text text-indigo-900 text-sm font-semibold leading-tight">Forgot password</div>
                        </div>
                    </div>
                </div>
                <div className="Actions self-stretch h-[104px] flex-col justify-start items-start gap-4 flex">
                    <PrimaryButton text="Sign In" href="/introduction_form" />
                    <div className="SocialButtonGroups self-stretch h-11 flex-col justify-center items-center gap-3 flex">
                        <div className="SocialButton self-stretch px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-center items-center gap-3 inline-flex">
                            <div className="SocialIcon w-6 h-6 relative"></div>
                            <div className="Text text-slate-700 text-base font-semibold leading-normal">Sign in with Google</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Row self-stretch justify-center items-start gap-1 inline-flex">
                <div className="Text text-gray-500 text-sm font-normal leading-tight">Don’t have an account?</div>
                <div className="Button justify-start items-start flex">
                    <div className="ButtonBase justify-center items-center gap-2 flex">
                        <div className="Text text-violet-700 text-sm font-semibold leading-tight">Sign up</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
