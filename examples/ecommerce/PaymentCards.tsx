import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import { DocsHeader } from "@/components/DocsPage/DocsHeader";
import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { DocsPreview } from "@/components/DocsPage/DocsPreview";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const PaymentCardsDemo = () => {
    return (
        <>
            <div className="space-y-16 flex items-center gap-6 justify-center">
                <div className="w-96 h-56 m-auto bg-gradient-to-r from-white/30 to-white/10 rounded-xl relative text-white shadow-lg backdrop-blur-lg transition-transform transform hover:scale-110 border border-white/20">

                    <img className="absolute inset-0 object-cover w-full h-full rounded-xl opacity-10" src="https://i.imgur.com/kGkSg1v.png"></img>

                    <div className="w-full px-8 absolute top-8">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-light">
                                    Name
                                </p>
                                <p className="font-medium tracking-widest">
                                    Karthik P
                                </p>
                            </div>
                            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                        </div>
                        <div className="pt-1">
                            <p className="font-light">
                                Card Number
                            </p>
                            <p className="font-medium tracking-more-wider">
                                4642  3489  9867  7632
                            </p>
                        </div>
                        <div className="pt-6 pr-6">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light text-xs">
                                        Valid
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-light text-xs">
                                        Expiry
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                                </div>

                                <div className="">
                                    <p className="font-light text-xs">
                                        CVV
                                    </p>
                                    <p className="font-bold tracking-more-wider text-sm">
                                        ···
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-96 h-56 bg-gradient-to-r from-white/30 to-white/10 rounded-xl relative text-white shadow-lg backdrop-blur-lg transition-transform transform hover:scale-110 border border-white/20">

                    <img className="absolute inset-0 object-cover w-full h-full rounded-xl opacity-10" src="https://i.imgur.com/Zi6v09P.png"></img>

                    <div className="w-full px-8 absolute top-8">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-light">
                                    Name
                                </p>
                                <p className="font-medium tracking-widest">
                                    Karthik P
                                </p>
                            </div>
                            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                        </div>
                        <div className="pt-1">
                            <p className="font-light">
                                Card Number
                            </p>
                            <p className="font-medium tracking-more-wider">
                                4642  3489  9867  7632
                            </p>
                        </div>
                        <div className="pt-6 pr-6">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light text-xs">
                                        Valid
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-light text-xs">
                                        Expiry
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                                </div>

                                <div className="">
                                    <p className="font-light text-xs">
                                        CVV
                                    </p>
                                    <p className="font-bold tracking-more-wider text-sm">
                                        ···
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



const PaymentCards = () => {
    return (
        <>
            <DocsSEO
                title="Payment Cards - edithspace/ui"
                description="Payment Payment card design using nextjs + tailwindcss."
                image="https://i.imgur.com/xXlUTna.png"
            />
            <DocsLayout>
                <main>
                    <DocsHeader
                        title="Payment Cards"
                        description="Payment Payment card design using nextjs + tailwindcss"
                    />
                    <DocsPreview title="Payment Card">
                        <PaymentCardsDemo />
                    </DocsPreview>
                    <CodeBlock
                        lang="tsx"
                        filename="PaymentCards.tsx"
                        code={`import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const HorizontalScroller1 = () => {
  return (
    <>
     <div className="w-96 h-56 m-auto bg-gradient-to-r from-white/30 to-white/10 rounded-xl relative text-white shadow-lg backdrop-blur-lg transition-transform transform hover:scale-110 border border-white/20">

    <img className="absolute inset-0 object-cover w-full h-full rounded-xl opacity-10" src="https://i.imgur.com/kGkSg1v.png"></img>
    <div className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
            <div className="">
                <p className="font-light">
                    Name
                </p>
                <p className="font-medium tracking-widest">
                    Karthik P
                </p>
            </div>
            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
        </div>
        <div className="pt-1">
            <p className="font-light">
                Card Number
            </p>
            <p className="font-medium tracking-more-wider">
                4642  3489  9867  7632
            </p>
        </div>
        <div className="pt-6 pr-6">
            <div className="flex justify-between">
                <div className="">
                    <p className="font-light text-xs">
                        Valid
                    </p>
                    <p className="font-medium tracking-wider text-sm">
                        11/15
                    </p>
                </div>
                <div className="">
                    <p className="font-light text-xs">
                        Expiry
                    </p>
                    <p className="font-medium tracking-wider text-sm">
                        03/25
                    </p>
                </d
                <div className="">
                    <p className="font-light text-xs">
                        CVV
                    </p>
                    <p className="font-bold tracking-more-wider text-sm">
                        ···
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  );
};`}
                    />
                </main>
            </DocsLayout>
        </>
    );
};

export default PaymentCards;
